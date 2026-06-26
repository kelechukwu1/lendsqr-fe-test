# Lendsqr Front-end Assessment

A dashboard application built with Next.js App Router, TypeScript, and SCSS, featuring a user directory management console, profile details pages, dynamic status filtering, and query-based search.

---

## 🚀 Key Features Built From Scratch

### 1. User Directory Dashboard

- **Dynamic Table**: A full list of users rendering organization, username, email, phone number, date joined, and status.
- **Overview Summary Cards**: Four dynamic summary cards reflecting real-time database counts for:
  - Total Users
  - Active Users
  - Users with Loans
  - Users with Savings
- **Advanced Filters**: A custom popover component allowing detailed user filtering by Organization, Username, Email, Phone Number, Date Joined, and Status.
- **Pagination**: Interactive pagination controller supporting custom items-per-page (10, 20, 50, 100) and page navigation.
- **Organized Sidebar Routing**: Built-in sidebar switcher that updates URL search parameters (`?org=...`) and dynamically loads organization-filtered subsets (including an "All" option to reset filters).

### 2. User Details View

- **Sub-tab Architecture**: Interactive navigation separating details into tab panels:
  - **General Information**: Personal Info, Education & Employment, Socials, and Guarantor.
  - **Documents**: Uploaded identity and verification documents.
  - **Bank & Settlement**: Financial verification details.
  - **Loans**: Loan history log.
  - **Savings**: Savings plans and targets.
  - **System**: Audit logs, device types, and IPs.
- **Componentized Tab Panels**: Clean modular design utilizing tab-specific subcomponents in [app/components/UserProfileDetails/] for optimal maintainability.
- **Action Controls**: blacklist and activation buttons with styling custom states.

### 3. Layout & UX Optimizations

- **Popover Visibility Fix**: Improved custom `Select` components with configurable dropdown directionality (`up`/`down`) to prevent vertical clipping within scrollable table container limits.
- **Responsive Mobile Views**: Adapted table card containers to support horizontal overflows on small screens while ensuring text and controls occupy full viewport width on mobile layouts.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router & Turbopack build engine)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla SCSS (Sass modules)
- **Data Fetching**: [TanStack React Query](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)

---

## 💾 Data Persistence & State

- **Mock Database Persistence**: The user database resides in a static JSON file (`db.json`) located in the Next.js API directory. It acts as the persistent source of truth and is queried via custom mock API route handlers to emulate a real REST endpoint.
- **Client Caching**: TanStack React Query is configured to cache fetched user directory data in-memory, minimizing redundant API requests and ensuring instantaneous tab switching.
- **Session State**: Session persistence is handled using browser **`LocalStorage`** to store and retrieve the logged-in user's email address. The layout extracts this value to dynamically display and format the user's name and email in the Navbar and Profile Dropdowns.

---

## 💻 Getting Started

### 1. Installation

Install the project dependencies:

```bash
npm install
```

### 2. Development Server

Run the local next development environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to inspect the application.

### 3. Production Build

Verify typescript and compile optimized production assets:

```bash
npm run build
```
