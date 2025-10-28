import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Domains */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Domeinen</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Domeinnaam controleren</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Domeinnaam registreren</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Verhuizen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Meerdere Domeinnaam hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NL Quarantaine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NL domein registratie</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">EU domein registratie</a></li>
            </ul>
          </div>

          {/* Web Hosting */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Webhosting</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Webhosting hulp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WordPress hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reseller hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Domein alleen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Email alleen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hostingpakket</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dedicated server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hosting Nederland</a></li>
            </ul>
          </div>

          {/* VPS & Help */}
          <div>
            <h3 className="font-semibold text-lg mb-4">VPS</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-6">
              <li><a href="#" className="hover:text-primary transition-colors">Linux VPS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Windows VPS</a></li>
            </ul>
            <h3 className="font-semibold text-lg mb-4">Helpdesk</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Helpdesk</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IP adres informatie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">bHosted</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status pagina</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Algemene voorwaarden</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sitemap</a></li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} bHosted. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
