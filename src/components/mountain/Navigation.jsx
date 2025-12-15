
export default function Navigation({ mobile = false, onClose }) {
  return (
    <div>
      <nav
        className={
          mobile
            ? "flex flex-col space-y-6 items-start w-full"
            : "absolute top-15 right-[177px] z-50 flex space-x-10 rounded-full px-6 py-2"
        }
      >
        <a
          href="#about"
          className="text-white hover:text-blue-400 transition text-lg"
          onClick={onClose}
        >
          About
        </a>
        <a
          href="#features"
          className="text-white hover:text-blue-400 transition text-lg"
          onClick={onClose}
        >
          Features
        </a>
        <a
          href="#contact"
          className="text-white hover:text-blue-400 transition text-lg"
          onClick={onClose}
        >
          Contact
        </a>
        <a
          href="#gallery"
          className="text-white hover:text-blue-400 transition text-lg"
          onClick={onClose}
        >
          Gallery
        </a>
        <a
          href="#team"
          className="text-white hover:text-blue-400 transition text-lg"
          onClick={onClose}
        >
          Team
        </a>
      </nav>
    </div>
  )
}
