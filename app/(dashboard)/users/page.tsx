"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./users.module.scss";
import { User } from "../../interfaces/user.interface";
import { Icon } from "../../components/Icons";
import { Select } from "../../components/Select";
import { FilterPopover } from "../../components/FilterPopover";
import { fetchUsers, UserFilters } from "@/app/services/users.service";
import { getPageNumbers } from "@/app/utils/pagination";
import { formatDate } from "@/app/utils/date";
import { SummaryCard } from "../../components/SummaryCard";

function UsersPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const orgParam = searchParams.get("org") || "";

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [showFilter, setShowFilter] = useState(false);
  const [activeKebab, setActiveKebab] = useState<string | null>(null);
  const [filters, setFilters] = useState<UserFilters>({ org: orgParam });

  useEffect(() => {
    setPage(1);
  }, [search, filters]);

  useEffect(() => {
    setFilters((prev) => {
      const currentOrg = searchParams.get("org") || "";
      if (prev.org !== currentOrg) {
        return { ...prev, org: currentOrg };
      }
      return prev;
    });
  }, [searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ["users", page, limit, search, filters],
    queryFn: () => fetchUsers(page, limit, search, filters),
  });

  const users: User[] = data?.data || [];
  const total = data?.meta?.total || 0;
  const totalPages = data?.meta?.totalPages || 1;
  const stats = data?.stats || {
    totalUsers: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0,
  };

  const toggleFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFilter(!showFilter);
    setActiveKebab(null);
  };

  const toggleKebab = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveKebab(activeKebab === id ? null : id);
    setShowFilter(false);
  };

  const handleRowClick = (id: string) => {
    router.push(`/users/${id}`);
  };

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <div className={styles.container} onClick={() => { setShowFilter(false); setActiveKebab(null); }}>
      <div className={styles.header}>
        <h1>Users</h1>
      </div>

      <div className={styles.summaryCards}>
        <SummaryCard
          icon="people"
          title="Users"
          count={stats.totalUsers.toLocaleString()}
          iconBgColor="rgba(223, 24, 255, 0.1)"
        />
        <SummaryCard
          icon="users"
          title="Active Users"
          count={stats.activeUsers.toLocaleString()}
          iconBgColor="rgba(87, 24, 255, 0.1)"

        />
        <SummaryCard
          icon="file"
          title="Users with Loans"
          count={stats.usersWithLoans.toLocaleString()}
          iconBgColor="rgba(245, 95, 68, 0.1)"
        />
        <SummaryCard
          icon="data"
          title="Users with Savings"
          count={stats.usersWithSavings.toLocaleString()}
          iconBgColor="rgba(255, 51, 102, 0.1)"
        />
      </div>

      <div className={styles.tableContainer}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner} />
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            {showFilter && (
              <FilterPopover
                onFilter={(newFilters) => setFilters(newFilters)}
                onReset={() => setFilters({})}
                onClose={() => setShowFilter(false)}
                initialFilters={filters}
              />
            )}



            <table>
              <thead>
                <tr>
                  <th>
                    <div className={styles.thContent} onClick={toggleFilter}>
                      Organization <Icon name="filter" width={16} height={16} />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thContent} onClick={toggleFilter}>
                      Username <Icon name="filter" width={16} height={16} />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thContent} onClick={toggleFilter}>
                      Email <Icon name="filter" width={16} height={16} />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thContent} onClick={toggleFilter}>
                      Phone number <Icon name="filter" width={16} height={16} />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thContent} onClick={toggleFilter}>
                      Date joined <Icon name="filter" width={16} height={16} />
                    </div>
                  </th>
                  <th>
                    <div className={styles.thContent} onClick={toggleFilter}>
                      Status <Icon name="filter" width={16} height={16} />
                    </div>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} onClick={() => handleRowClick(user.id)} className={styles.trHover}>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{formatDate(user.dateJoined)}</td>
                    <td>
                      <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className={styles.actionBtn} onClick={(e) => toggleKebab(e, user.id)}>
                        <Icon name="kebab" width={20} height={20} />
                        {activeKebab === user.id && (
                          <div className={styles.kebabMenu} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.menuItem} onClick={() => router.push(`/users/${user.id}`)}>
                              <Icon name="eye" width={16} height={16} /> View Details
                            </div>
                            <div className={styles.menuItem}>
                              <Icon name="user-x" width={16} height={16} /> Blacklist User
                            </div>
                            <div className={styles.menuItem}>
                              <Icon name="user-active" width={16} height={16} /> Activate User
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isLoading && (
          <div className={styles.pagination}>
            <div className={styles.info}>
              Showing
              <Select
                value={limit}
                onChange={(val) => {
                  setLimit(Number(val));
                  setPage(1);
                }}
                options={[
                  { value: 10, label: 10 },
                  { value: 20, label: 20 },
                  { value: 50, label: 50 },
                  { value: 100, label: 100 },
                ]}
                direction="up"
              />
              out of {total}
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className={styles.pageArrow}
              >
                <ChevronLeft size={16} />
              </button>
              <div className={styles.pageNumbers}>
                {pageNumbers.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.pageNumber} ${p === page ? styles.active : ""} ${p === "..." ? styles.ellipsis : ""}`}
                    onClick={() => {
                      if (typeof p === "number") {
                        setPage(p);
                      }
                    }}
                    disabled={p === "..."}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={styles.pageArrow}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function UsersPage() {
  return (
    <Suspense fallback={
      <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          border: '3px solid rgba(33, 63, 125, 0.1)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          borderLeftColor: '#39CDCC',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    }>
      <UsersPageContent />
    </Suspense>
  );
}
