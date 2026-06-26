import { SidebarCategory } from "../interfaces/sidebar.interface";

export const sidebarCategories: SidebarCategory[] = [
  {
    category: "Customers",
    items: [
      { label: "Users", href: "/users", icon: "user-friends" },
      { label: "Guarantors", href: "/guarantors", icon: "guarantors" },
      { label: "Loans", href: "/loans", icon: "loans" },
      {
        label: "Decision Models",
        href: "/decision-models",
        icon: "decision-models",
      },
      { label: "Savings", href: "/savings", icon: "savings" },
      { label: "Loan Requests", href: "/loan-requests", icon: "loan-requests" },
      { label: "Whitelist", href: "/whitelist", icon: "whitelists" },
      { label: "Karma", href: "/karma", icon: "karma" },
    ],
  },
  {
    category: "Businesses",
    items: [
      { label: "Organization", href: "/organization", icon: "organization" },
      { label: "Loan Products", href: "/loan-products", icon: "loans" },
      {
        label: "Savings Products",
        href: "/savings-products",
        icon: "savings-products",
      },
      { label: "Fees and Charges", href: "/fees-and-charges", icon: "fees" },
      { label: "Transactions", href: "/transactions", icon: "transactions" },
      { label: "Services", href: "/services", icon: "services" },
      {
        label: "Service Account",
        href: "/service-account",
        icon: "service-accounts",
      },
      { label: "Settlements", href: "/settlements", icon: "settlements" },
      { label: "Reports", href: "/reports", icon: "reports" },
    ],
  },
  {
    category: "Settings",
    items: [
      { label: "Preferences", href: "/preferences", icon: "preferences" },
      {
        label: "Fees and Pricing",
        href: "/fees-and-pricing",
        icon: "fees-and-prices",
      },
      { label: "Audit Logs", href: "/audit-logs", icon: "audit-logs" },
      {
        label: "System Messages",
        href: "/system-messages",
        icon: "system-messages",
      },
    ],
  },
];
