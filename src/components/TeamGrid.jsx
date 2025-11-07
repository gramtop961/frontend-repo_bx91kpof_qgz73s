import { User, Sparkles } from "lucide-react";

const people = [
  { name: "Alex Kim", role: "Product Lead" },
  { name: "Jordan Lee", role: "Design Director" },
  { name: "Sam Patel", role: "Engineering Manager" },
  { name: "Taylor Brooks", role: "QA Lead" },
  { name: "Riley Chen", role: "Data Scientist" },
  { name: "Casey Rivera", role: "DevOps" },
  { name: "Morgan Diaz", role: "Frontend" },
  { name: "Jamie Nguyen", role: "Backend" },
  { name: "Avery Singh", role: "Research" },
  { name: "Drew Park", role: "Mobile" },
  { name: "Kris Allen", role: "Security" },
  { name: "Parker Shaw", role: "Support" },
];

export default function TeamGrid() {
  return (
    <section id="team" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Meet the Team</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A squad of strategists, designers, and engineers aligned around outcomes.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-red-500" />
            12 core disciplines
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {people.map((p) => (
            <div key={p.name} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:border-red-500/40 transition">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition">
                <User className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-white font-medium">{p.name}</h3>
              <p className="text-sm text-white/60">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
