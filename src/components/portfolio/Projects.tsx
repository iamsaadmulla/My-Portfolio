import { useState } from "react";
import { SectionHeader } from "./About";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AWS 3-Tier Architecture Deployment with High Availability (2 AZ)",
    date: "Apr 2026",
    desc: "Production-grade 3-tier AWS architecture spanning two Availability Zones with isolated network layers, auto-scaled compute, and a private managed database tier for fault tolerance.",
    tech: ["AWS", "VPC", "EC2", "ALB", "Auto Scaling", "RDS", "NGINX", "PHP"],
    github: "https://github.com/iamsaadmulla",
    bullets: [
      "Problem: deliver a highly available, network-isolated web stack that survives an AZ failure without manual intervention.",
      "Architecture: custom VPC with public/private subnets across 2 AZs, Internet Gateway + NAT Gateway for egress, ALB in front of NGINX (frontend) and PHP (backend) ASGs, RDS MySQL in private DB subnets.",
      "Implementation: provisioned ALBs and Auto Scaling Groups for both tiers, hardened with security groups and DB subnet groups; only the ALB is publicly reachable.",
      "Outcome: scalable, fault-tolerant delivery with secure, private data storage and clear separation of web / app / data tiers.",
    ],
  },
  {
    title: "Cloud-Based Node.js Application Deployment on AWS with Nginx & RDS",
    date: "May 2025",
    desc: "Production-ready Node.js web application deployed on AWS following a three-tier pattern, with Nginx as reverse proxy, PM2 for process management, and RDS MySQL for persistent storage.",
    tech: ["AWS", "EC2", "Node.js", "NGINX", "PM2", "RDS", "MySQL"],
    github: "https://github.com/iamsaadmulla",
    bullets: [
      "Problem: ship a real Node.js app to AWS with industry-standard reliability and security practices.",
      "Architecture: EC2 hosts the Node.js app behind Nginx reverse proxy; PM2 keeps the process alive; RDS MySQL sits in a private subnet, reached only via app servers.",
      "Implementation: configured Nginx to route frontend traffic and backend APIs, used environment variables for DB credentials, and removed any direct public exposure of the database.",
      "Outcome: resilient deployment with proper process supervision, clean traffic routing, and a hardened data layer.",
    ],
  },
  {
    title: "CI/CD Pipeline Automation on AWS using Jenkins, Terraform, and GitHub",
    date: "June 2026",
    desc: "End-to-end CI/CD pipeline for a Student Management Web Application — Jenkins drives the build, Terraform provisions AWS infrastructure, and GitHub is the source of truth.",
    tech: ["AWS", "Jenkins", "Terraform", "GitHub", "Maven", "EC2", "RDS", "S3"],
    github: "https://github.com/iamsaadmulla",
    bullets: [
      "Problem: replace manual build-and-deploy steps with a repeatable, automated pipeline from commit to running app.",
      "Architecture: GitHub → Jenkins Pipeline (Maven build & package) → deploy to AWS EC2; RDS for the application database; S3 as the remote backend for Terraform state.",
      "Implementation: wrote Jenkinsfile stages for checkout, build, package, and deploy; authored Terraform modules for EC2, RDS, and S3 with centralized state.",
      "Outcome: streamlined software delivery with infrastructure-as-code, versioned state, and hands-off deployments on every push.",
    ],
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tech)));

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="// projects" title={<>Featured <span className="text-gradient">Projects</span></>} subtitle="A selection of cloud, automation, and infrastructure work." />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["All", ...allTags].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`font-mono text-xs px-3 py-1.5 rounded-md border transition-colors ${
                filter === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <article key={p.title} className="glass rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-glow transition-all group">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Github className="size-5" /></a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-accent mt-1">▹</span>{b}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary/60 border border-border text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border flex gap-2">
                <Button variant="outlineGlow" size="sm" asChild>
                  <a href={p.github} target="_blank" rel="noreferrer"><Github /> Code</a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={p.github} target="_blank" rel="noreferrer"><ExternalLink /> Details</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
