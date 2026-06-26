import styles from "../../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../../interfaces/user.interface";

interface AppTabProps {
  user: User;
}

export const AppTab = ({ user }: AppTabProps) => {
  if (!user.appAndSystem) return null;

  return (
    <div className={styles.section}>
      <h3>App Usage & System Details</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <span className={styles.label}>LAST LOGIN TIMESTAMP</span>
          <span className={styles.value}>{new Date(user.appAndSystem.lastLogin).toLocaleString()}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>REGISTERED DEVICE</span>
          <span className={styles.value}>{user.appAndSystem.deviceType}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>LOGIN IP ADDRESS</span>
          <span className={styles.value}>{user.appAndSystem.ipAddress}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>APP VERSION INSTALLED</span>
          <span className={styles.value}>{user.appAndSystem.appVersion}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>PLATFORM ACCESS STATUS</span>
          <span className={styles.value} style={{ color: '#39CD62', fontWeight: 600 }}>{user.appAndSystem.platformStatus}</span>
        </div>
      </div>
    </div>
  );
};
