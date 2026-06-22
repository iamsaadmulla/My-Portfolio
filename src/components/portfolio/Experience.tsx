import { SectionHeader } from "./About";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: <Briefcase className="size-4" />,
    role: "Cloud Engineer Intern",
    org: "Cravita Pvt Ltd",
    period: "Jan 2026 — Sept 2026",
    points: [
      "Worked on cloud infrastructure setup and automation tasks on AWS.",
      "Assisted in designing and implementing CI/CD pipelines with Jenkins & GitHub Actions.",
      "Built and managed Docker containers, explored orchestration with Kubernetes.",
      "Collaborated on real-world DevOps projects across deployment and monitoring.",
      "Participated in incident response, log analysis, and troubleshooting production issues.",
    ],
  },
  {
    icon: <GraduationCap className="size-4" />,
    role: "B.Tech, Computer Science",
    org: "PVPIT, Budhgaon, Sangli",
    period: "2022 — 2026",
    points: [
      "Coursework: Operating Systems, Networks, Cloud Computing, Databases, DSA.",
      "Hands-on labs in Linux, virtualization, and distributed systems.",
      "Active in cloud and open-source learning communities.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="// experience" title={<>Journey & <span className="text-gradient">Experience</span></>} />

        <div className="mt-14 relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent -translate-x-px sm:-translate-x-1/2" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <div key={i} className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:pl-8"}`}>
                  <div className={`absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-primary shadow-glow ring-4 ring-background`} />
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{item.role}</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1.5 sm:justify-end mt-1">
                    {item.icon} {item.org}
                  </p>
                </div>
                <div className="pl-12 sm:pl-0 sm:pr-0">
                  <ul className={`glass rounded-xl p-5 space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "sm:ml-8" : "sm:mr-8"}`}>
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
