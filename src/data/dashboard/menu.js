import {
  X,
  LayoutDashboard,
  Building2,
  GraduationCap,
  Users,
  UserCog,
  School,
  BarChart3,
  LineChart,
  Settings,
  CreditCard,
} from "lucide-react";

export const menu = [
  { label: "Overview", icon: LayoutDashboard, path: "/admin" },
  { label: "Institutions", icon: Building2, path: "/admin/institutions" },
  { label: "Teacher", icon: GraduationCap, path: "/admin/teacher" },
  { label: "Student", icon: Users, path: "/admin/student" },
  { label: "Staff", icon: UserCog, path: "/admin/staff" },
  { label: "Facilities", icon: School, path: "/admin/facilities" },
  { label: "Reports", icon: BarChart3, path: "/admin/reports" },
  { label: "Analytics", icon: LineChart, path: "/admin/analytics" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
  { label: "Fees management", icon: CreditCard, path: "/admin/fees" },
];