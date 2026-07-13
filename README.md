# FinSight

## Personal Finance Management Mobile Application

**Developed Using:** React Native, Expo, TypeScript

---

# Table of Contents

1. Introduction
2. Problem Statement
3. Objectives
4. Scope
5. Features
6. Technology Stack
7. Project Architecture
8. Folder Structure
9. Modules
10. Installation
11. Future Scope
12. Conclusion

---

# 1. Introduction

FinSight is a cross-platform personal finance management application developed using React Native and Expo. It enables users to manage income, expenses, budgets, and financial records through a clean and modern mobile interface.

The application provides real-time financial insights, transaction management, budget tracking, and graphical visualization of spending patterns to help users make informed financial decisions.

---

# 2. Problem Statement

Managing personal finances manually is time-consuming and prone to errors. Existing finance applications often contain unnecessary complexity or require paid subscriptions. FinSight aims to provide a lightweight, intuitive, and user-friendly solution for tracking daily expenses and monthly budgets.

---

# 3. Objectives

- Track income and expenses
- Maintain transaction history
- Calculate current balance automatically
- Set monthly budgets
- Visualize spending trends
- Improve financial awareness through analytics

---

# 4. Scope

FinSight is intended for individual users who want to monitor personal finances on a mobile device. The application focuses on simplicity, usability, and responsive design.

---

# 5. Features

## Dashboard

- Current Balance
- Income Summary
- Expense Summary
- Weekly Spending Chart
- Recent Transactions

## Transactions

- View transaction history
- Search transactions
- Filter by Income/Expense
- Delete transactions

## Add Transaction

- Add Income
- Add Expense
- Category Selection
- Description
- Date Selection

## Budget

- Monthly Budget Creation
- Category-wise Budgets
- Progress Bars
- Budget Usage Tracking

## Profile

- Editable User Name
- Dark Mode Toggle (UI)

---

# 6. Technology Stack

| Technology | Purpose |
|------------|----------|
| React Native | Mobile Application Development |
| Expo SDK 54 | Development Framework |
| TypeScript | Type Safety |
| Expo Router | Navigation |
| Context API | State Management |
| React Native Chart Kit | Data Visualization |
| Expo Vector Icons | Icons |
| React Native Safe Area Context | Safe Area Handling |

---

# 7. Project Architecture

```text
                User
                  │
                  ▼
            Expo Router
                  │
                  ▼
          Application Screens
                  │
   ┌──────────────┼───────────────┐
   ▼              ▼               ▼
Dashboard   Transactions      Budget
      ▼            ▼             ▼
 Add Transaction            Profile
          │
          ▼
     Finance Context
          │
 ┌────────┴─────────┐
 ▼                  ▼
Transactions      Budgets
          │
          ▼
      Utility Functions
          │
          ▼
Charts • Balance • Budget Tracking
```

---

# 8. Folder Structure

```text
src
│
├── app
├── components
├── context
├── data
├── hooks
├── screens
│   ├── Dashboard
│   ├── Transactions
│   ├── AddTransaction
│   ├── Budget
│   └── Profile
├── theme
├── types
└── utils
```

---

# 9. Modules

## Dashboard

Displays:

- Current Balance
- Income
- Expenses
- Spending Chart
- Recent Transactions

---

## Transactions

Provides:

- Complete Transaction History
- Search Functionality
- Filter Options
- Delete Transactions

---

## Add Transaction

Allows users to:

- Choose Income or Expense
- Select Category
- Enter Amount
- Add Description
- Choose Date

---

## Budget

Allows users to:

- Set Monthly Budgets
- Track Category Spending
- Monitor Budget Progress
- View Remaining Budget

---

## Profile

Allows users to:

- Edit Display Name
- Toggle Dark Mode (UI)

---

# 10. Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npx expo start
```

---

# 11. Future Scope

- Persistent storage using AsyncStorage
- Firebase Authentication
- Cloud Data Synchronization
- Push Notifications
- Multiple Currency Support
- CSV/PDF Export
- AI-Based Spending Insights
- Recurring Transactions
- Financial Reports

---

# 12. Conclusion

FinSight demonstrates the development of a modern personal finance application using React Native and Expo. The project successfully combines transaction management, budgeting, data visualization, and responsive mobile design into a modular and scalable architecture.

The application provides users with an intuitive experience for managing daily finances while serving as a strong foundation for future enhancements such as cloud synchronization, authentication, and advanced analytics.
