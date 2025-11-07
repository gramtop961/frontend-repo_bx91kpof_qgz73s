export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold">Crimson Collective</p>
            <p className="text-white/60 text-sm">Building bold products with a large, distributed team.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#home" className="text-white/80 hover:text-white text-sm">Home</a>
            <span className="text-white/20">•</span>
            <a href="#team" className="text-white/80 hover:text-white text-sm">Team</a>
            <span className="text-white/20">•</span>
            <a href="#work" className="text-white/80 hover:text-white text-sm">Work</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Crimson Collective. All rights reserved.</div>
      </div>
    </footer>
  );
}
