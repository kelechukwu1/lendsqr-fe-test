"use client";

import styles from "./Sidebar.module.scss";

interface OrgDropdownProps {
  onSelect: (org: string) => void;
}

export const OrgDropdown = ({ onSelect }: OrgDropdownProps) => {
  return (
    <div className={styles.orgDropdown}>
      {["All", "Lendsqr", "Irorun", "Lendstar"].map((org) => (
        <button
          key={org}
          type="button"
          className={styles.orgOption}
          onClick={() => onSelect(org)}
        >
          {org}
        </button>
      ))}
    </div>
  );
};
