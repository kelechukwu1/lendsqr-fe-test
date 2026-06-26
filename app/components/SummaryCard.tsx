"use client";

import React from "react";
import styles from "./SummaryCard.module.scss";
import { Icon } from "./Icons";
import { IconName } from "../types/icon.type";

interface SummaryCardProps {
  icon: IconName;
  title: string;
  count: string | number;
  iconBgColor?: string;
}

export const SummaryCard = ({ icon, title, count, iconBgColor }: SummaryCardProps) => {
  return (
    <div className={styles.card}>
      <div 
        className={styles.iconWrapper} 
        style={iconBgColor ? { backgroundColor: iconBgColor } : undefined}
      >
        <Icon name={icon} width={22} height={22} />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};
