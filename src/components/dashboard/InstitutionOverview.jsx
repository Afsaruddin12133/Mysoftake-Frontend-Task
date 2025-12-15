import { institutions } from "../../data/dashboard/institutions";

const typeStyles = {
  school: "bg-blue-100 text-blue-600",
  college: "bg-green-100 text-green-600",
  university: "bg-purple-100 text-purple-600",
};

export default function InstitutionOverview() {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-slate-800">
        Institution Overview
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-slate-500">
              <th className="pb-3 font-medium">Institution</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Students</th>
              <th className="pb-3 font-medium">Staff</th>
              <th className="pb-3 font-medium">Revenue</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {institutions.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none text-sm text-slate-700"
              >
                <td className="py-4 font-medium">{item.name}</td>

                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                      typeStyles[item.type]
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="py-4">{item.students}</td>
                <td className="py-4">{item.staff}</td>
                <td className="py-4">{item.revenue}</td>

                <td className="py-4">
                  <span className="rounded-full border border-green-500 px-3 py-1 text-xs font-medium text-green-600">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
