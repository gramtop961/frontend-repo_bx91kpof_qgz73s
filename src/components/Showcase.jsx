import { Code2, Layout, Server, Shield } from "lucide-react";

const items = [
  {
    title: "Strategy & Discovery",
    icon: Layout,
    desc: "Workshops, alignment, and roadmaps that set product direction.",
  },
  {
    title: "Design Systems",
    icon: Code2,
    desc: "Accessible, scalable UI kits powering cohesive experiences.",
  },
  {
    title: "Platform Engineering",
    icon: Server,
    desc: "Cloud-native backends, APIs, and reliable infrastructure.",
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    desc: "Best practices baked in from day one for peace of mind.",
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative bg-gradient-to-b from-black to-[#0b0b0b] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Do</h2>
          <p className="mt-2 text-white/70 max-w-2xl mx-auto">
            End-to-end delivery across strategy, design, and engineering.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/40 transition group">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-md shadow-red-600/30 group-hover:scale-105 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
