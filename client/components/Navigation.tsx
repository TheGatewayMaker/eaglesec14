import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link
            to="/"
            className="flex items-center gap-3 font-black text-xl hover:opacity-90 transition duration-300"
          >
            <img
              src="https://i.ibb.co/s954vR34/eaglesecurityoriginallogo-1-copy.png"
              alt="Eagle Security Guards Logo"
              className="h-11 w-11"
            />
            <span>Eagle Security Guards</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="hover:text-accent transition-colors font-bold text-base"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-accent transition-colors font-bold text-base"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="hover:text-accent transition-colors font-bold text-base"
            >
              About Us
            </Link>
            <Link
              to="/why-choose-us"
              className="hover:text-accent transition-colors font-bold text-base"
            >
              Why Choose Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-accent transition-colors font-bold text-base"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl hover:text-accent transition-colors font-bold">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
