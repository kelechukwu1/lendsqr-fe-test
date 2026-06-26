import styles from "../../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../../interfaces/user.interface";

interface BankTabProps {
  user: User;
}

export const BankTab = ({ user }: BankTabProps) => {
  if (!user.bankDetails) return null;

  return (
    <div className={styles.section}>
      <h3>Bank & Settlement Account Details</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <span className={styles.label}>BANK NAME</span>
          <span className={styles.value}>{user.bankDetails.bankName}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>ACCOUNT NUMBER</span>
          <span className={styles.value}>{user.bankDetails.accountNumber}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>ACCOUNT TYPE</span>
          <span className={styles.value}>{user.bankDetails.accountType}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>BVN</span>
          <span className={styles.value}>{user.bankDetails.bvn}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>BVN VERIFICATION STATUS</span>
          <span className={styles.value} style={{ color: '#39CD62', fontWeight: 600 }}>{user.bankDetails.bvnVerificationStatus}</span>
        </div>
      </div>
    </div>
  );
};
