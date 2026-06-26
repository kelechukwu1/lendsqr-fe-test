import styles from "../../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../../interfaces/user.interface";

interface DocumentsTabProps {
  user: User;
}

export const DocumentsTab = ({ user }: DocumentsTabProps) => {
  if (!user.documents) return null;

  return (
    <div className={styles.section}>
      <h3>Uploaded Documents</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <span className={styles.label}>BVN</span>
          <span className={styles.value}>{user.documents.bvn}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>STATE OF ORIGIN</span>
          <span className={styles.value}>{user.documents.stateOfOrigin}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>LGA</span>
          <span className={styles.value}>{user.documents.lga}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>NIN</span>
          <span className={styles.value}>{user.documents.nin}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>IDENTITY DOCUMENT TYPE</span>
          <span className={styles.value}>{user.documents.identityCard}</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>SIGNATURE STATUS</span>
          <span className={styles.value}>Uploaded (File verified)</span>
        </div>
      </div>
    </div>
  );
};
