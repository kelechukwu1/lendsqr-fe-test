"use client";

import styles from "../(dashboard)/users/[id]/userDetails.module.scss";
import { User } from "../interfaces/user.interface";
import { GeneralTab } from "./UserProfileDetails/GeneralTab";
import { DocumentsTab } from "./UserProfileDetails/DocumentsTab";
import { BankTab } from "./UserProfileDetails/BankTab";
import { LoansTab } from "./UserProfileDetails/LoansTab";
import { SavingsTab } from "./UserProfileDetails/SavingsTab";
import { AppTab } from "./UserProfileDetails/AppTab";

interface UserProfileDetailsProps {
  user: User;
  activeTab: "general" | "documents" | "bank" | "loans" | "savings" | "app";
}

export const UserProfileDetails = ({ user, activeTab }: UserProfileDetailsProps) => {
  return (
    <div className={styles.detailsCard}>
      {activeTab === "general" && <GeneralTab user={user} />}
      {activeTab === "documents" && <DocumentsTab user={user} />}
      {activeTab === "bank" && <BankTab user={user} />}
      {activeTab === "loans" && <LoansTab user={user} />}
      {activeTab === "savings" && <SavingsTab user={user} />}
      {activeTab === "app" && <AppTab user={user} />}
    </div>
  );
};
