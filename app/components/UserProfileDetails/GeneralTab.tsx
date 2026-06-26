import styles from "../../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../../interfaces/user.interface";

interface GeneralTabProps {
  user: User;
}

export const GeneralTab = ({ user }: GeneralTabProps) => {
  if (!user.personalInformation || !user.educationAndEmployment || !user.socials || !user.guarantor) {
    return null;
  }

  return (
    <>
      <div className={styles.section}>
        <h3>Personal Information</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <span className={styles.label}>FULL NAME</span>
            <span className={styles.value}>{user.personalInformation.fullName}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>PHONE NUMBER</span>
            <span className={styles.value}>{user.personalInformation.phoneNumber}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>EMAIL ADDRESS</span>
            <span className={styles.value}>{user.personalInformation.emailAddress}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>BVN</span>
            <span className={styles.value}>{user.personalInformation.bvn}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>GENDER</span>
            <span className={styles.value}>{user.personalInformation.gender}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>MARITAL STATUS</span>
            <span className={styles.value}>{user.personalInformation.maritalStatus}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>CHILDREN</span>
            <span className={styles.value}>{user.personalInformation.children}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>TYPE OF RESIDENCE</span>
            <span className={styles.value}>{user.personalInformation.typeOfResidence}</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Education and Employment</h3>
        <div className={`${styles.grid} ${styles.grid4}`}>
          <div className={styles.field}>
            <span className={styles.label}>LEVEL OF EDUCATION</span>
            <span className={styles.value}>{user.educationAndEmployment.levelOfEducation}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>EMPLOYMENT STATUS</span>
            <span className={styles.value}>{user.educationAndEmployment.employmentStatus}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>SECTOR OF EMPLOYMENT</span>
            <span className={styles.value}>{user.educationAndEmployment.sectorOfEmployment}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>DURATION OF EMPLOYMENT</span>
            <span className={styles.value}>{user.educationAndEmployment.durationOfEmployment}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>OFFICE EMAIL</span>
            <span className={styles.value}>{user.educationAndEmployment.officeEmail}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>MONTHLY INCOME</span>
            <span className={styles.value}>
              ₦{user.educationAndEmployment.monthlyIncome[0]?.toLocaleString()} - ₦{user.educationAndEmployment.monthlyIncome[1]?.toLocaleString()}
            </span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>LOAN REPAYMENT</span>
            <span className={styles.value}>{user.educationAndEmployment.loanRepayment}</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Socials</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <span className={styles.label}>TWITTER</span>
            <span className={styles.value}>{user.socials.twitter}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>FACEBOOK</span>
            <span className={styles.value}>{user.socials.facebook}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>INSTAGRAM</span>
            <span className={styles.value}>{user.socials.instagram}</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Guarantor</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <span className={styles.label}>FULL NAME</span>
            <span className={styles.value}>{user.guarantor.fullName}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>PHONE NUMBER</span>
            <span className={styles.value}>{user.guarantor.phoneNumber}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>EMAIL ADDRESS</span>
            <span className={styles.value}>{user.guarantor.emailAddress}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>RELATIONSHIP</span>
            <span className={styles.value}>{user.guarantor.relationship}</span>
          </div>
        </div>
      </div>
    </>
  );
};
