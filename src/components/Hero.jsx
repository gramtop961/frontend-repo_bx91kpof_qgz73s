import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          United in Craft. Driven by Impact.
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          A large, multi-disciplinary team delivering bold digital products. We blend strategy, design, and engineering to ship work that matters.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#work" className="inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-white font-medium shadow-lg shadow-red-600/30 hover:bg-red-500 transition">Explore Work</a>
          <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-white font-medium hover:bg-white/20 transition">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
