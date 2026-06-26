import { HeroSection } from "@/components/sections/hero";
import { WhatIDoSection } from "@/components/sections/what-i-do";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { BeyondWorkSection } from "@/components/sections/beyond-work";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatIDoSection />
      <WorkSection />
      <AboutSection />
      <BeyondWorkSection />
      <ContactSection />
    </main>
  );
}
