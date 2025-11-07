import { Rocket, Users } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-white shadow-md shadow-red-600/30 group-hover:shadow-red-600/50 transition">
            <Rocket className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Crimson Collective</p>
            <p className="text-xs text-white/60">Large Team • Modern Web</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#team" className="text-white/80 hover:text-white transition">Team</a>
          <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-red-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-500/60"
        >
          <Users className="h-4 w-4" />
          Join Us
        </a>
      </div>
    </header>
  );
}
