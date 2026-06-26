"use client";

import { useRef } from "react";
import styles from "./Navbar.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

interface NotificationDropdownProps {
  onClose: () => void;
}

export const NotificationDropdown = ({ onClose }: NotificationDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, onClose);

  return (
    <div ref={dropdownRef} className={styles.notificationDropdown}>
      <h4>Notifications</h4>
      <div className={styles.notificationItem}>
        <span className={styles.notiText}>New user registration: Grace Effiom joined.</span>
        <span className={styles.notiTime}>5 mins ago</span>
      </div>
      <div className={styles.notificationItem}>
        <span className={styles.notiText}>Loan request #2482 approved by admin.</span>
        <span className={styles.notiTime}>1 hour ago</span>
      </div>
      <div className={styles.notificationItem}>
        <span className={styles.notiText}>System database backup completed.</span>
        <span className={styles.notiTime}>4 hours ago</span>
      </div>
      <button
        type="button"
        className={styles.clearAll}
        onClick={onClose}
      >
        Clear all notifications
      </button>
    </div>
  );
};
