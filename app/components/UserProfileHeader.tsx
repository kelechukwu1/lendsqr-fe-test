"use client";

import styles from "../(dashboard)/users/[id]/userDetails.module.scss";
import { Icon } from "./Icons";
import { User } from "../interfaces/user.interface";

interface UserProfileHeaderProps {
  user: User;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

export const UserProfileHeader = ({ user, activeTab, setActiveTab }: UserProfileHeaderProps) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.mainInfo}>
        <div className={styles.avatar}>
          <Icon name="user" width={40} height={40} />
        </div>
        <div className={styles.nameSection}>
          <h2>{user.personalInformation?.fullName}</h2>
          <p>{user.id}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.tierSection}>
          <p>User&apos;s Tier</p>
          <div className={styles.stars}>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} style={{ opacity: i < (user.generalDetails?.tier || 0) ? 1 : 0.2 }}>★</span>
            ))}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bankSection}>
          <h2>₦{user.generalDetails?.accountBalance.toLocaleString()}</h2>
          <p>{user.generalDetails?.bankAccountNumber}/Providus Bank</p>
        </div>
      </div>

      <div className={styles.tabs}>
        {[
          { id: "general", label: "General Details" },
          { id: "documents", label: "Documents" },
          { id: "bank", label: "Bank Details" },
          { id: "loans", label: "Loans" },
          { id: "savings", label: "Savings" },
          { id: "app", label: "App and System" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
