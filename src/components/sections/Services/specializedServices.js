import {
  Building2,
  ChartSpline,
  CircleDollarSign,
  FileChartColumn,
  HandCoins,
  Layers3,
  Rocket,
  ShieldCheck,
  Tags,
  UsersRound,
  Wallet,
  Waypoints,
} from "lucide-react";

export const specializedServiceGroups = [
  {
    eyebrow: "Nonprofit Services",
    title: "Financial stewardship for mission-driven organizations",
    description:
      "Nonprofits require more than ordinary bookkeeping. Apex helps organizations maintain clear records, strengthen accountability, and prepare useful financial information for leadership, boards, grantors, and stakeholders.",
    icon: HandCoins,
    tone: "navy",
    items: [
      {
        icon: Layers3,
        title: "Fund and grant tracking",
        description:
          "Track restricted, unrestricted, grant, program, and funding activity with greater clarity.",
      },
      {
        icon: Tags,
        title: "Class and program reporting",
        description:
          "Organize activity by program, department, grant, location, or other meaningful reporting dimension.",
      },
      {
        icon: FileChartColumn,
        title: "Board-ready reporting",
        description:
          "Prepare clear financial reports that support oversight, accountability, and informed governance.",
      },
      {
        icon: ShieldCheck,
        title: "Controls and stewardship",
        description:
          "Strengthen bookkeeping workflows, documentation, accountability, and financial-management practices.",
      },
      {
        icon: CircleDollarSign,
        title: "Budget-to-actual analysis",
        description:
          "Compare spending and revenue against approved budgets and program expectations.",
      },
      {
        icon: UsersRound,
        title: "Leadership support",
        description:
          "Provide dependable information that helps executive directors and boards understand financial performance.",
      },
    ],
  },
  {
    eyebrow: "Business & Startup Services",
    title: "Financial clarity for growing businesses",
    description:
      "Small businesses and startups need bookkeeping that supports cash flow, operational decisions, tax readiness, and sustainable growth. Apex builds systems that keep financial information organized and useful.",
    icon: Building2,
    tone: "gold",
    items: [
      {
        icon: Wallet,
        title: "Owner equity and draws",
        description:
          "Properly track owner contributions, distributions, personal activity, and equity transactions.",
      },
      {
        icon: Waypoints,
        title: "Class and location tracking",
        description:
          "Measure performance across business lines, locations, departments, or service categories.",
      },
      {
        icon: ChartSpline,
        title: "Cash-flow visibility",
        description:
          "Gain a clearer understanding of inflows, expenses, obligations, and upcoming financial needs.",
      },
      {
        icon: Rocket,
        title: "Startup setup",
        description:
          "Establish QuickBooks, accounts, workflows, records, and reporting practices correctly from the beginning.",
      },
      {
        icon: ShieldCheck,
        title: "Cleanup and correction",
        description:
          "Resolve uncategorized transactions, reconciliations, duplicate activity, and inaccurate balances.",
      },
      {
        icon: FileChartColumn,
        title: "Management reporting",
        description:
          "Receive practical reports that help owners evaluate results and make better operating decisions.",
      },
    ],
  },
];
