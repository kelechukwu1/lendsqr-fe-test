"use client";

import React from "react";

export const Loading = () => {
  return (
    <div style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{
        border: "3px solid rgba(33, 63, 125, 0.1)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        borderLeftColor: "#39CDCC",
        animation: "spin 1s linear infinite"
      }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
