"use client";

import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export const EmptyState = ({ 
  title = "No records found", 
  description = "We couldn't find any users matching your active filters or search terms."
}: EmptyStateProps) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      textAlign: "center",
      background: "#fff",
      borderRadius: "4px",
      border: "1px dashed rgba(33, 63, 125, 0.12)",
      marginTop: "10px",
      marginBottom: "10px"
    }}>
      <Inbox size={48} color="#545F7D" style={{ opacity: 0.3, marginBottom: "16px" }} />
      <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#213F7D", marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#545F7D", maxWidth: "380px", marginBottom: "0px", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
};
