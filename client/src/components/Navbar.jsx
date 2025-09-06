// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal.jsx";
import SignupModal from "./SignupModal.jsx";
import logo from "../assets/logo4.png";

const navLink =
  "uppercase text-lg font-bold tracking-wide text-slate-700 hover:text-[#1B4A8B] transition-colors px-4 py-2";

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="King Logo"
                className="h-15 w-15 invert"
              />
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/" end className={navLink}>
                Home
              </NavLink>
              <NavLink to="/courses" className={navLink}>
                Courses
              </NavLink>
              <NavLink to="/launchpad" className={navLink}>
                LaunchPad
              </NavLink>
              <NavLink to="/about" className={navLink}>
                About
              </NavLink>
              <NavLink to="/faq" className={navLink}>
                FAQ
              </NavLink>
            </nav>

            {/* Login + Admin + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link
                to="/admin/login"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-semibold px-4 py-2.5 shadow hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                👑 Admin
              </Link>
              <button
                onClick={handleLoginClick}
                className="inline-flex items-center gap-2 rounded-full bg-[#1B4A8B] text-white text-sm font-semibold px-5 py-2.5 shadow hover:bg-indigo-700"
              >
                Login
              </button>
              <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700">
                <span className="sr-only">Menu</span>☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onSwitchToSignup={handleSwitchToSignup}
      />

      {/* Signup Modal */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={handleCloseSignupModal}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
}
