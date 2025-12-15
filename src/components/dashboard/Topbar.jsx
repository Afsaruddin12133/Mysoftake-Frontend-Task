import { Menu, Bell, User } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button className="cursor-pointer" onClick={onMenuClick}>
          <Menu />
        </button>

        <input
          type="text"
          placeholder="Search institutions, students, staff..."
          className="hidden md:block border-gray-400 w-80 px-3 py-2 border rounded-md text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
}
