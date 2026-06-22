import { GraduationCap, MapPin, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="// about" title={<>Who is <span className="text-gradient">Saad Mulla</span>?</>} />
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              I'm a passionate <span className="text-foreground font-medium">DevOps & Cloud Engineer</span> based in
              Pune, India. My journey is fueled by curiosity about how modern software ships
              fast, scales effortlessly, and stays reliable under load.
            </p>
            <p>
              I work with <span className="text-primary">AWS</span>, containerization
              (<span className="text-primary">Docker</span>, <span className="text-primary">Kubernetes</span>),
              infrastructure as code with <span className="text-primary">Terraform</span>,
              CI/CD using <span className="text-primary">Jenkins</span> and GitHub Actions,
              and configuration management with <span className="text-primary">Ansible</span>.
            </p>
            <p>
              Through hands-on internships and personal projects, I've built scalable cloud
              architectures, automated deployment pipelines, and explored cloud-native
              patterns that power production-grade systems.
            </p>
          </div>

          <div className="space-y-4">
            <InfoCard icon={<GraduationCap className="size-5" />} title="Education" lines={["B.Tech, Computer Science", "PVPIT, Budhgaon, Sangli", "Class of 2026"," " , " ","Higher Secondary Eduation(HSC) ", "Willingdon College, Sangli", "Class of 2022"]} />
            <InfoCard icon={<MapPin className="size-5" />} title="Location" lines={["Pune, Maharashtra", "Open to remote / hybrid"]} />
            <InfoCard icon={<Briefcase className="size-5" />} title="Focus" lines={["Cloud Infrastructure", "DevOps Automation", "Cloud-Native Systems"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="glass rounded-xl p-5 hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-2 text-primary mb-2">
        {icon}
        <span className="font-semibold text-sm uppercase tracking-wider">{title}</span>
      </div>
      <ul className="space-y-1 text-sm text-muted-foreground">
        {lines.map((l) => <li key={l}>{l}</li>)}
      </ul>
    </div>
  );
}

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="font-mono text-sm text-accent mb-3">{kicker}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      <div className="mt-6 mx-auto h-px w-24 bg-gradient-primary" />
    </div>
  );
}
