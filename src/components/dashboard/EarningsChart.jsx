import { data } from "../../data/dashboard/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function EarningsChart() {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Earnings
        </h2>

        <div className="flex items-center gap-6 text-sm">
          <LegendDot color="bg-blue-500" label="Income" />
          <LegendDot color="bg-indigo-300" label="Expense" />
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
              }}
              formatter={(value) => `৳${value.toLocaleString()}`}
            />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#4F6CF7"
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#A5B4FC"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <span className="text-gray-700">{label}</span>
    </div>
  );
}
