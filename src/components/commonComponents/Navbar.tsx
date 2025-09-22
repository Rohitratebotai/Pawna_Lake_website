import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50">
            <div className="W-full mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-2xl font-bold">Pawna Lake</div>
                <button
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    &#9776;
                </button>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
                    <li><a href="#gallery" className="hover:text-cyan-400 transition">Gallery</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
                </ul>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center bg-slate-900 space-y-6 py-6">
                    <li><a href="#home" className="hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" className="hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#gallery" className="hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Gallery</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400 transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;