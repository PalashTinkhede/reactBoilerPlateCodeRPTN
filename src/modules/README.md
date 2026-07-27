# Modular Architecture Architecture & Guidelines

The `modules/` folder organizes features as self-contained, domain-driven modules (e.g., `finance`, `dashboard`, `auth`, `user-management`).

---

## Standard Module Folder Structure

Every module inside `modules/<module-name>/` should follow this standardized structure:

```text
modules/<module-name>/
├── assets/         # Module-specific images, icons, and media files
├── components/     # UI components exclusive to this module
├── constants/      # Module-specific constant values, action types, or ENUMs
├── hooks/          # Custom React hooks encapsulating module business logic
├── pages/          # Full page view components (rendered by router)
├── routes/         # React Router route definitions for this module
├── services/       # API call functions (e.g., Axios/Fetch requests)
├── store/          # Redux Toolkit slices (state management for this module)
├── utils/          # Helper & utility functions specific to this domain
├── index.js        # Public export barrel file for the module
└── README.md       # Overview and usage docs for this specific module
```

---

## Guidelines for What Each Directory Should Contain

### 1. `assets/`
- Contains logos, vector icons, background graphics, or locale JSON files specific **only** to this module.

### 2. `components/`
- Contains reusable, presenter UI components (e.g., `FinanceSummaryCard.jsx`, `InvoiceTable.jsx`).
- Components here should **not** be shared across other modules. Shared UI components belong in `src/components/`.

### 3. `constants/`
- Contains configuration settings, status enums, or hardcoded strings (e.g., `FINANCE_CONSTANTS.js`, `PAYMENT_STATUS.js`).

### 4. `hooks/`
- Contains custom React hooks encapsulating state handling or data fetching (e.g., `useFinanceData.js`, `useTransactions.js`).

### 5. `pages/`
- Top-level page views (e.g., `FinanceDashboardPage.jsx`, `TransactionHistoryPage.jsx`).
- Connects components, custom hooks, and state slices together.

### 6. `routes/`
- Configures sub-routes for this module (e.g., `financeRoutes.jsx`). Exports a `<Route>` tree to plug into `App.jsx`.

### 7. `services/`
- Functions responsible for fetching/posting data from/to APIs (e.g., `financeService.js`).

### 8. `store/`
- Contains Redux Toolkit slices (`financeSlice.js`).
- Keeps module-level state localized.

### 9. `utils/`
- Pure helper functions (e.g., `formatCurrency()`, `calculateTax()`).

### 10. `index.js` (Barrel File)
- Exposes only the necessary pages, routes, or store reducers to the rest of the app:
  ```js
  export { FinanceDashboardPage } from "./pages/FinanceDashboardPage.jsx";
  export { financeRoutes } from "./routes/financeRoutes.jsx";
  export { default as financeReducer } from "./store/financeSlice.js";
  ```
