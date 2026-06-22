import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer, BackToTop } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saad Mulla — DevOps & Cloud Engineer | Portfolio" },
      { name: "description", content: "Portfolio of Saad Mulla, a DevOps & Cloud Engineer based in Pune. AWS, Docker, Kubernetes, Terraform, Jenkins, CI/CD and cloud-native infrastructure." },
      { property: "og:title", content: "Saad Mulla — DevOps & Cloud Engineer" },
      { property: "og:description", content: "AWS & DevOps Enthusiast — Learning, Building, Growing." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Saad Mulla",
        jobTitle: "DevOps & Cloud Engineer",
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
        email: "mailto:saadmulla6101@gmail.com",
        url: "https://github.com/iamsaadmulla",
        sameAs: [
          "https://github.com/iamsaadmulla",
          "https://www.linkedin.com/in/saad-mulla/",
        ],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" richColors position="bottom-right" />
    </div>
  );
}
