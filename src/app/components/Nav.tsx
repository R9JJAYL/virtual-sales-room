"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Product Overview" },
    { href: "/next-steps", label: "Next Steps" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-beamery-dark/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-beamery-purple to-beamery-blue flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Beamery</span>
        </div>

        {/* Page links */}
        <div className="flex gap-1 bg-white/5 rounded-full p-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                pathname === link.href
                  ? "bg-gradient-to-r from-beamery-purple to-beamery-accent text-white shadow-lg shadow-beamery-purple/25"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Prepared for badge */}
        <div className="text-xs text-white/40">
          Prepared for <span className="text-white/70 font-medium">Your Team</span>
        </div>
      </div>
    </nav>
  );
}
