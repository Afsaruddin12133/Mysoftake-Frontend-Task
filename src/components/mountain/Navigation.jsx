import React from 'react'

export default function Navigation() {
  return (
    <div>
        <nav className="absolute top-15 right-[177px] z-50 flex space-x-10 rounded-full px-6 py-2">
            <a
              href="#about"
              className="text-white hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#features"
              className="text-white hover:text-blue-400 transition"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition"
            >
              Contact
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-blue-400 transition"
            >
              Gallery
            </a>
            <a
              href="#team"
              className="text-white hover:text-blue-400 transition"
            >
              Team
            </a>
          </nav>
    </div>
  )
}
