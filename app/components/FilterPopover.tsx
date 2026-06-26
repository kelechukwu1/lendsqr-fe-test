"use client";

import { useState, useRef } from "react";
import styles from "../(dashboard)/users/users.module.scss";
import { Select } from "./Select";
import { useClickOutside } from "../hooks/useClickOutside";
import { UserFilters } from "../services/users.service";

interface FilterPopoverProps {
  onFilter: (filters: UserFilters) => void;
  onReset: () => void;
  onClose: () => void;
  initialFilters: UserFilters;
}

export const FilterPopover = ({ onFilter, onReset, onClose, initialFilters }: FilterPopoverProps) => {
  const [org, setOrg] = useState(initialFilters.org || "");
  const [username, setUsername] = useState(initialFilters.username || "");
  const [email, setEmail] = useState(initialFilters.email || "");
  const [date, setDate] = useState(initialFilters.date || "");
  const [phone, setPhone] = useState(initialFilters.phone || "");
  const [status, setStatus] = useState(initialFilters.status || "");

  const popoverRef = useRef<HTMLDivElement>(null);
  useClickOutside(popoverRef, onClose);

  const handleApply = () => {
    onFilter({ org, username, email, date, phone, status });
    onClose();
  };

  const handleReset = () => {
    setOrg("");
    setUsername("");
    setEmail("");
    setDate("");
    setPhone("");
    setStatus("");
    onReset();
    onClose();
  };

  return (
    <div ref={popoverRef} className={styles.filterPopover} onClick={(e) => e.stopPropagation()}>
      <div className={styles.filterGroup}>
        <label>Organization</label>
        <Select
          value={org}
          onChange={(val) => setOrg(val)}
          options={[
            { value: "", label: "Select" },
            { value: "Lendsqr", label: "Lendsqr" },
            { value: "Irorun", label: "Irorun" },
            { value: "Lendstar", label: "Lendstar" },
          ]}
        />
      </div>
      <div className={styles.filterGroup}>
        <label>Username</label>
        <input
          type="text"
          placeholder="User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.filterGroup}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.filterGroup}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.filterGroup}>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.filterGroup}>
        <label>Status</label>
        <Select
          value={status}
          onChange={(val) => setStatus(val)}
          options={[
            { value: "", label: "Select" },
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
            { value: "Pending", label: "Pending" },
            { value: "Blacklisted", label: "Blacklisted" },
          ]}
        />
      </div>
      <div className={styles.filterActions}>
        <button type="button" className={styles.btnReset} onClick={handleReset}>Reset</button>
        <button type="button" className={styles.btnFilter} onClick={handleApply}>Filter</button>
      </div>
    </div>
  );
};
