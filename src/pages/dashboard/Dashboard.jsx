import { Building2, GraduationCap, IndianRupee, Users } from "lucide-react";
import EarningsChart from "../../components/dashboard/EarningsChart";
import InstitutionOverview from "../../components/dashboard/InstitutionOverview";
import StatsCard from "../../components/dashboard/StatsCard";
import StudentPieChart from "../../components/dashboard/StudentPieChart";
import Calendar from './../../components/dashboard/Calendar';
export default function Dashboard() {
  return (
    <div className="px-2 sm:px-4 md:px-8 py-4 w-full  mx-auto">
      <h1 className="text-xl sm:text-2xl font-semibold">Dashboard Overview</h1>
      <p className="text-gray-500 mt-1 text-sm sm:text-base">
        Welcome to your educational institutions management dashboard
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <StatsCard
          title="Total Institutions"
          value="5"
          subtitle="+2 this month"
          icon={Building2}
        />
        <StatsCard
          title="Total Students"
          value="8"
          subtitle="+12% from last month"
          icon={GraduationCap}
        />
        <StatsCard
          title="Total Staff"
          value="6"
          subtitle="+5 new hires"
          icon={Users}
        />
        <StatsCard
          title="Total Revenue"
          value="৳6.5Cr"
          subtitle="+8.2% from last year"
          icon={IndianRupee}
        />
      </div>

      {/* Chart and Calendar */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6 w-full">
        <div className="w-full lg:w-2/3">
          <EarningsChart />
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <Calendar />
        </div>
      </div>

      {/* Overview and Pie Chart */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 w-full">
        <div className="w-full md:w-2/3">
          <InstitutionOverview/>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <StudentPieChart/>
        </div>
      </div>
    </div>
  );
}
