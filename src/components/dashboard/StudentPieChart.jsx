import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { MoreVertical } from "lucide-react";

const data = [
  { name: "Male", value: 58, color: "#2F55FF" },
  { name: "Female", value: 40, color: "#2EA8FF" },
  { name: "Other", value: 2, color: "#FFA63D" },
];

export default function StudentPieChart() {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Student Pi Chart
          </h2>
          <p className="text-sm text-slate-500">September 2025</p>
        </div>

        <MoreVertical className="text-slate-400" />
      </div>

      {/* Chart */}
      <div className="relative h-64 w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-semibold text-slate-800">
            60
          </span>
        </div>
      </div>

      {/* Labels */}
      <div className="mt-6 flex justify-center gap-6">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-slate-700">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
