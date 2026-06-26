import React, { Suspense } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import styles from "./dashboard.module.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardLayout}>
      <Suspense fallback={<div style={{ height: '100px', backgroundColor: '#fff' }} />}>
        <Navbar />
      </Suspense>
      <div className={styles.mainContent}>
        <Sidebar />
        <main className={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
}
