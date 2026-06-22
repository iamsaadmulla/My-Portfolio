import { SectionHeader } from "./About";
import { Cloud, Code2, GitBranch, Server, Container, Boxes, Workflow, Terminal } from "lucide-react";

const groups = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="size-5" />,
    skills: ["AWS", "Terraform", "Jenkins", "Docker", "Kubernetes", "Ansible", "GitHub Actions", "CloudWatch"],
  },
  {
    title: "Programming & Scripting",
    icon: <Code2 className="size-5" />,
    skills: ["Linux", "Bash / Shell", "Python", "JavaScript", "YAML", "SQL"],
  },
  {
    title: "Version Control & Tools",
    icon: <GitBranch className="size-5" />,
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Nginx"],
  },
  {
    title: "Infrastructure & Monitoring",
    icon: <Server className="size-5" />,
    skills: ["EC2", "VPC", "S3", "RDS", "IAM", "Prometheus", "Grafana", "ELK"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Docker: <Container className="size-4" />,
  Kubernetes: <Boxes className="size-4" />,
  Jenkins: <Workflow className="size-4" />,
  Linux: <Terminal className="size-4" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="// skills" title={<>Tech <span className="text-gradient">Stack</span></>} subtitle="The tools I use to build, ship, and run modern infrastructure." />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-glow group">
              <div className="flex items-center gap-3 mb-5">
                <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-primary/20 transition-colors">
                  {g.icon}
                </div>
                <h3 className="font-display font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-md bg-secondary/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {iconMap[s]}{s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
