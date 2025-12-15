import { ArrowUpRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
}) {
  return (
    <div className="w-full rounded-2xl border border-gray-300 bg-white p-5 shadow-sm ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">
          {title}
        </p>

        {Icon && (
          <div className="rounded-lg border border-gray-200 p-2 text-gray-600">
            <Icon size={18} />
          </div>
        )}
      </div>

      {/* Value */}
      <div className="mt-4 text-3xl font-semibold text-gray-900">
        {value}
      </div>

      {/* Growth */}
      <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
        <ArrowUpRight size={16} />
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
