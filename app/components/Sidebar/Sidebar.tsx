"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";
import { Icon } from "../Icons";
import { OrgSwitcher } from "./OrgSwitcher";
import { sidebarCategories } from "@/app/data";
import { useSidebar } from "../../context/SidebarContext";

export const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <OrgSwitcher />

      <Link 
        href="/dashboard" 
        className={`${styles.navItem} ${pathname === "/dashboard" ? styles.active : ""}`}
        onClick={closeSidebar}
      >
        <Icon name="dashboard" width={16} height={16} />
        <span>Dashboard</span>
      </Link>

      {sidebarCategories.map((category) => (
        <Fragment key={category.category}>
          <div className={styles.category}>{category.category}</div>
          {category.items.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                onClick={closeSidebar}
              >
                <Icon name={item.icon} width={16} height={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </Fragment>
      ))}

      <div className={styles.logout}>
        <Link href="/login" className={styles.navItem} onClick={closeSidebar}>
          <Icon name="logout" width={16} height={16} />
          <span>Logout</span>
        </Link>
        <div className={styles.navItem} style={{ fontSize: "12px", marginTop: "10px" }}>
          v1.2.0
        </div>
      </div>
    </aside>
  );
};


