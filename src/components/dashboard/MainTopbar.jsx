import { Bell, EllipsisVertical, Pi, User } from "lucide-react";

export default function MainTopbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-300 px-6">
      <div className="mx-auto h-full flex items-center justify-between">
        
        {/* Logo */}
          <span className="font-bold text-blue-600 text-lg flex items-center justify-between cursor-pointer">
           <Pi size={50} color="#1855A7"  /> <span className="text-[#1855A7]">360</span>
          </span>


        {/* Navigation */}
        <nav className="flex items-center gap-85 text-sm font-medium text-gray-700 w-[900px]">
          <span className="cursor-pointer hover:text-blue-600 transition">
            Home
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition">
            Institutions
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition">
            Message
          </span>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <EllipsisVertical size={20} color="#185A7B" />
        </div>

      </div>
    </header>
  );
}
