import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from '../../assets/superhero/logo.png'

const navItems = [
  {
    label: "Home",
    submenu: ["Hero Home", "Hero Intro"],
  },
  {
    label: "About Us",
    submenu: ["Who We Are", "Our Mission"],
  },
  {
    label: "Services",
    submenu: ["Hero Training", "Hero Support"],
  },
  {
    label: "Projects",
    submenu: ["Avengers", "Justice League"],
  },
  {
    label: "Blog",
    submenu: ["Latest News", "Hero Stories"],
  },
  {
    label: "Page",
    submenu: ["FAQ", "Testimonials"],
  },
  {
    label: "Contact",
    submenu: ["Contact Info", "Join Us"],
  },
];

export default function SuperHeroNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 lg:px-20 py-6 text-black">
        {/* Logo */}
        <img src={logo} alt="logo" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <span className="uppercase text-sm tracking-wide">
                  {item.label}
                </span>
                <ChevronDown size={14} />
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-white rounded-md shadow-lg min-w-[180px]">
                {item.submenu.map((sub) => (
                  <div
                    key={sub}
                    className="px-4 py-3 text-sm hover:bg-yellow-400 hover:text-black transition"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <button className="ml-6 flex items-center gap-2 rounded-full border border-yellow-400 px-6 py-2 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition">
            Get An Appointment
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 text-white p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="logo" />
            <button onClick={() => setMobileOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="space-y-4">
            {navItems.map((item, idx) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center py-3 uppercase text-sm"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      activeDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === idx && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <div
                        key={sub}
                        className="text-sm text-white/80"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button className="mt-6 w-full rounded-full border border-yellow-400 py-3 font-semibold hover:bg-yellow-400 hover:text-black transition">
              Get An Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
