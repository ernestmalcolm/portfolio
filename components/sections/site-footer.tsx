import { EmLogo } from "@/components/em-logo";
import { ContactSection } from "@/components/sections/contact";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy-dark/80 backdrop-blur-sm">
      <ContactSection />
      <div className="container-page flex flex-col gap-2 border-t border-line py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p className="flex items-center gap-3">
          <EmLogo className="text-base" />
          <span>
            © {year} {siteConfig.name}
          </span>
        </p>
        <p>Built in Dar es Salaam. Fully tax compliant.</p>
      </div>
    </footer>
  );
}
