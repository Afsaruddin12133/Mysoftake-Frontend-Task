import { EllipsisVertical, Pi } from "lucide-react";

export default function MainTopbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-300 px-3 sm:px-6 w-full">
      <div className="mx-auto h-full flex items-center justify-between w-full">
        {/* Logo */}
        <span className="font-bold text-blue-600 text-base sm:text-lg flex items-center cursor-pointer min-w-[70px]">
          <Pi size={36} className="sm:size-10" color="#1855A7" />
          <span className="text-[#1855A7] ml-1">360</span>
        </span>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-gray-700 max-w-full md:w-[420px] lg:w-[600px] xl:w-[900px] xl:flex xl:items-center xl:justify-between">
          <span className="cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
            Home
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
            Institutions
          </span>
          <span className="cursor-pointer hover:text-blue-600 transition whitespace-nowrap">
            Message
          </span>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <EllipsisVertical size={20} color="#185A7B" />
        </div>
      </div>
    </header>
  );
}
