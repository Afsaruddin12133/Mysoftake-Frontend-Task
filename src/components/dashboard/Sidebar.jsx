
import { NavLink } from "react-router-dom";
import { menu } from "../../data/dashboard/menu";
import { X } from "lucide-react";


export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-white border-r border-gray-300
        transform transition-transform duration-300
        ${open ? "translate-x-0 lg:static" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100 lg:hidden">
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menu.map(({ label, icon: Icon, path }) => (
            <NavLink
              key={label}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition
                 ${
                   isActive
                     ? "bg-blue-100 text-blue-600 font-semibold"
                     : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                 }`
              }
            >
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
