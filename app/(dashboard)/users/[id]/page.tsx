"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import styles from "./userDetails.module.scss";
import { Icon } from "../../../components/Icons";
import { fetchUser } from "@/app/services/users.service";
import { Loading } from "../../../components/Loading";

import { UserProfileHeader } from "../../../components/UserProfileHeader";
import { UserProfileDetails } from "../../../components/UserProfileDetails";

export default function UserDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState<"general" | "documents" | "bank" | "loans" | "savings" | "app">("general");

  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  if (isLoading) return <Loading />;
  if (error || !user) return <div>Failed to load user.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/users" className={styles.backLink}>
          <Icon name="arrow-back" width={24} height={24} /> Back to Users
        </Link>
        <div className={styles.headerRow}>
          <h1>User Details</h1>
          <div className={styles.actions}>
            <button className={styles.blacklist}>BLACKLIST USER</button>
            <button className={styles.activate}>ACTIVATE USER</button>
          </div>
        </div>
      </div>

      <UserProfileHeader user={user} activeTab={activeTab} setActiveTab={setActiveTab} />
      <UserProfileDetails user={user} activeTab={activeTab} />
    </div>
  );
}

