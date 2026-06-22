import { useState } from "react";
import { SectionHeader } from "./About";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "Saad Mulla", email: "saadmulla@gmail.com", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="// contact" title={<>Let's <span className="text-gradient">Connect</span></>} subtitle="Have a project, role, or just want to chat about cloud & DevOps?" />

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ContactRow icon={<Mail />} label="Email" value="saadmulla6101@gmail.com" href="mailto:saadmulla6101@gmail.com" />
            <ContactRow icon={<Phone />} label="Phone" value="+91 98908 83484" href="tel:+919890883484" />
            <ContactRow icon={<MapPin />} label="Location" value="Pune, India" />
            <ContactRow icon={<Github />} label="GitHub" value="@iamsaadmulla" href="https://github.com/iamsaadmulla" />
            <ContactRow icon={<Linkedin />} label="LinkedIn" value="saad-mulla" href="https://www.linkedin.com/in/saad-mulla/" />
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-5">
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                className="w-full bg-input/40 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={160}
                className="w-full bg-input/40 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                placeholder="Tell me a bit about your idea, role, or question..."
                className="w-full bg-input/40 border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </Field>
            <Button variant="hero" size="lg" type="submit" disabled={loading} className="w-full sm:w-auto">
              <Send /> {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/40 transition-colors">
      <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
