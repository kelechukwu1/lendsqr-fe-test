"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.scss";
import { Icon } from "../Icons";
import { useClickOutside } from "../../hooks/useClickOutside";

interface ProfileDropdownProps {
  userEmail: string;
  onClose: () => void;
}

export const ProfileDropdown = ({ userEmail, onClose }: ProfileDropdownProps) => {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);

  const getUsernameFromEmail = (email: string) => {
    const namePart = email.split("@")[0] || "Adedeji";
    const formatted = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    if (formatted.length > 15) {
      return formatted.slice(0, 19) + "...";
    }
    return formatted;
  };

  const handleLogout = () => {
    onClose();
    if (typeof window !== "undefined") {
      localStorage.removeItem("userEmail");
    }
    router.push("/login");
  };

  return (
    <div ref={dropdownRef} className={styles.profileDropdown}>
      <div className={styles.profileHeader}>
        <strong>{getUsernameFromEmail(userEmail)}</strong>
        <span className={styles.profileEmail} title={userEmail}>
          {userEmail.length > 28 ? userEmail.slice(0, 19) + "..." : userEmail}
        </span>
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
        onClick={handleLogout}
      >
        <Icon name="user-x" width={14} height={14} /> Logout
      </button>
    </div>
  );
};
