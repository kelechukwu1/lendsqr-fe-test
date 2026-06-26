"use client";

import { useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Sidebar.module.scss";
import { Icon } from "../Icons";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { OrgDropdown } from "./OrgDropdown";

const OrgSwitcherInner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeOrg = searchParams.get("org") || "";

  const [showOrgDropdown, setShowOrgDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleOrgDropdown = () => setShowOrgDropdown(!showOrgDropdown);

  useClickOutside(wrapperRef, () => setShowOrgDropdown(false));

  const handleOrgChange = (org: string) => {
    setShowOrgDropdown(false);
    if (org === "All") {
      router.push("/users");
    } else {
      router.push(`/users?org=${encodeURIComponent(org)}`);
    }
  };

  return (
    <div ref={wrapperRef} className={styles.orgSwitcherWrapper}>
      <button type="button" className={styles.orgSwitcher} onClick={toggleOrgDropdown}>
        <Icon name="organization" width={16} height={16} />
        <span>{activeOrg || "Switch Organization"}</span>
        <ChevronDown size={20} className={`${styles.chevron} ${showOrgDropdown ? styles.open : ""}`} />
      </button>
      {showOrgDropdown && (
        <OrgDropdown onSelect={handleOrgChange} />
      )}
    </div>
  );
};

export const OrgSwitcher = () => {
  return (
    <Suspense fallback={
      <div className={styles.orgSwitcherWrapper}>
        <button type="button" className={styles.orgSwitcher} disabled>
          <Icon name="organization" width={16} height={16} />
          <span>Switch Organization</span>
          <ChevronDown size={20} className={styles.chevron} />
        </button>
      </div>
    }>
      <OrgSwitcherInner />
    </Suspense>
  );
};
