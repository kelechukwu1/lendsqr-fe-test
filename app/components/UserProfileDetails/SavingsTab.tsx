import styles from "../../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../../interfaces/user.interface";

interface SavingsTabProps {
  user: User;
}

export const SavingsTab = ({ user }: SavingsTabProps) => {
  if (!user.savings) return null;

  return (
    <div className={styles.section}>
      <h3>Savings & Goals</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <span className={styles.label}>SAVINGS BALANCE</span>
          <span className={styles.value} style={{ fontWeight: 600, color: '#213F7D' }}>₦{user.savings.accountBalance.toLocaleString()}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>SAVINGS TARGET GOAL</span>
          <span className={styles.value}>{user.savings.savingsGoal}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>GOAL TARGET AMOUNT</span>
          <span className={styles.value}>₦{user.savings.goalAmount.toLocaleString()}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>CURRENT PROGRESS</span>
          <span className={styles.value}>₦{user.savings.currentSaved.toLocaleString()}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>ANNUAL INTEREST RATE</span>
          <span className={styles.value}>{user.savings.interestRate}</span>
        </div>
      </div>
    </div>
  );
};
