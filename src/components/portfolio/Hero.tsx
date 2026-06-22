import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, FolderGit2, Github, Linkedin } from "lucide-react";
import portfolioImg from "../../../../portfolio img.jpeg";

// import resume from "@/assets/Saad_M_Resume.pdf";
import resume from "@/assets/Saad_M_Resume.pdf";

const roles = ["DevOps Engineer", "Cloud Engineer", "AWS Enthusiast", "Automation Builder"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-sm text-primary mb-4 animate-fade-in">
            <span className="text-muted-foreground">$</span> whoami
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in">
            Saad <span className="text-gradient">Mulla</span>
          </h1>
          <div className="mt-5 font-mono text-lg sm:text-xl text-muted-foreground h-7">
            <span className="text-accent">&gt; </span>
            {text}
            <span className="animate-blink text-primary">_</span>
          </div>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            AWS &amp; DevOps Enthusiast — <span className="text-foreground">Learning, Building, Growing.</span> I design
            resilient cloud infrastructure, automate everything I can, and ship reliable
            pipelines from commit to production.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects"><FolderGit2 /> View Projects</a>
            </Button>
            <Button variant="outlineGlow" size="lg" asChild>
              <a
                href={resume}
                download="Saad_Mulla_Resume.pdf"
                onClick={(e) => e.stopPropagation()}
              > <Download />
                Download Resume
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#contact"><Mail /> Contact</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/iamsaadmulla" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="size-5" /></a>
            <a href="https://www.linkedin.com/in/saad-mulla/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin className="size-5" /></a>
            <a href="mailto:saadmulla6101@gmail.com" className="hover:text-primary transition-colors"><Mail className="size-5" /></a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-30 blur-2xl" />
            <div className="relative size-64 sm:size-80 lg:size-96 rounded-full overflow-hidden border-2 border-primary/40 shadow-glow">
              <img src={portfolioImg} alt="Portfolio image" className="w-full h-full object-cover object-[50%_10%]" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 font-mono text-xs text-primary">
              status: <span className="text-accent">available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
