import ContactSection from "@/components/homepage/contactSection/ContactSection";
import HeroSection from "@/components/homepage/heroSection/HeroSection";
import ProjectsSection from "@/components/homepage/projectSection/ProjectsSection";
import SkillsSection from "@/components/homepage/skillsSection/SkillsSection";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <HeroSection />

      {/* projects section */}
      <ProjectsSection />

      {/* Skills section */}
      <SkillsSection />

      {/* YouTube Section */}

      {/* Blog section */}

      {/* Contact section */}
      <ContactSection />
    </main>
  );
}
