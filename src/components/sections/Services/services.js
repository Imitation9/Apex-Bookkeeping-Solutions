import {
  BookOpenCheck,
  BrushCleaning,
  Calculator,
  ChartNoAxesCombined,
  ClipboardCheck,
  Landmark,
  ReceiptText,
  WalletCards,
} from "lucide-react";

export const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Accurate monthly bookkeeping that keeps your records current, reconciled, and ready for informed decision-making.",
    icon: BookOpenCheck,
    features: [
      "Transaction categorization",
      "Bank and credit card reconciliations",
      "Monthly account review",
    ],
  },
  {
    title: "Book Cleanup",
    description:
      "Thorough cleanup of incomplete, inaccurate, or overdue records so you can move forward from a dependable foundation.",
    icon: BrushCleaning,
    features: [
      "Historical transaction review",
      "Correction of account balances",
      "Personal and business activity separation",
    ],
  },
  {
    title: "QuickBooks Online Setup",
    description:
      "A professionally configured QuickBooks Online file designed around your organization, workflow, and reporting requirements.",
    icon: Calculator,
    features: [
      "Chart of accounts setup",
      "Bank-feed configuration",
      "Class and tracking structure",
    ],
  },
  {
    title: "Payroll Support",
    description:
      "Reliable payroll-related bookkeeping and reconciliation support that keeps wages, taxes, and liabilities organized.",
    icon: Landmark,
    features: [
      "Payroll transaction review",
      "Liability reconciliation",
      "QuickBooks Payroll support",
    ],
  },
  {
    title: "Accounts Payable & Receivable",
    description:
      "Organized bill, invoice, vendor, and customer tracking that strengthens visibility and supports healthier cash flow.",
    icon: WalletCards,
    features: [
      "Bill and invoice tracking",
      "Vendor balance review",
      "Customer receivable monitoring",
    ],
  },
  {
    title: "Financial Reporting",
    description:
      "Clear financial reports that help leaders understand performance, identify concerns, and make confident decisions.",
    icon: ChartNoAxesCombined,
    features: [
      "Profit and loss statements",
      "Balance sheets",
      "Customized management reporting",
    ],
  },
  {
    title: "Budgeting & Forecasting",
    description:
      "Practical budgeting and forecasting support to help you plan responsibly and compare actual results against expectations.",
    icon: ClipboardCheck,
    features: [
      "Annual budget preparation",
      "Budget-to-actual reporting",
      "Cash-flow forecasting",
    ],
  },
  {
    title: "1099 Support",
    description:
      "Organized contractor tracking and year-end preparation support designed to reduce stress and improve reporting accuracy.",
    icon: ReceiptText,
    features: [
      "Contractor payment review",
      "Vendor information tracking",
      "1099 preparation support",
    ],
  },
];
