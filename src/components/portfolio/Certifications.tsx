import { SectionHeader } from "./About";
import { Award } from "lucide-react";

const certs = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", color: "from-orange-500/30 to-yellow-500/10" },
  { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", color: "from-purple-500/30 to-blue-500/10" },
  { name: "Kubernetes Fundamentals", issuer: "CNCF / Linux Foundation", color: "from-blue-500/30 to-cyan-500/10" },
  { name: "Linux Essentials", issuer: "LPI", color: "from-green-500/30 to-emerald-500/10" },
  { name: "Cloud Engineer Internship", issuer: "Cravita Pvt Ltd", color: "from-cyan-500/30 to-teal-500/10" },
  { name: "Docker Mastery", issuer: "Self-paced + Labs", color: "from-sky-500/30 to-blue-500/10" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="// credentials" title={<>Certifications & <span className="text-gradient">Achievements</span></>} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div key={c.name} className={`relative overflow-hidden rounded-2xl p-6 glass hover:border-primary/40 hover:shadow-glow transition-all group`}>
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              <div className="relative">
                <div className="size-11 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4">
                  <Award className="size-5" />
                </div>
                <h3 className="font-display font-semibold leading-snug">{c.name}</h3>
                <p className="mt-1 text-xs font-mono text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
