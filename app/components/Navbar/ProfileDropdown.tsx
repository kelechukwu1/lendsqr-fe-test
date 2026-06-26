"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.scss";
import { Icon } from "../Icons";
import { useClickOutside } from "../../hooks/useClickOutside";

interface ProfileDropdownProps {
  onClose: () => void;
}

export const ProfileDropdown = ({ onClose }: ProfileDropdownProps) => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);

  return (
    <div ref={dropdownRef} className={styles.profileDropdown}>
      <div className={styles.profileHeader}>
        <strong>Adedeji</strong>
        <span className={styles.profileEmail}>adedeji@lendsqr.com</span>
      </div>
      <button 
        type="button" 
        className={styles.menuItem} 
        onClick={() => {
          onClose();
        }}
      >
        <Icon name="user-active" width={14} height={14} /> Profile Settings
      </button>
      <button 
        type="button" 
        className={styles.menuItem}
        onClick={() => {
          onClose();
        }}
      >
        <Icon name="data" width={14} height={14} /> Preferences
      </button>
      <button 
        type="button" 
        className={`${styles.menuItem} ${styles.logoutItem}`}
        onClick={() => {
          onClose();
          router.push("/login");
        }}
      >
        <Icon name="user-x" width={14} height={14} /> Logout
      </button>
    </div>
  );
};
