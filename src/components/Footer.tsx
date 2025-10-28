import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Domains */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Domains</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Check domain name</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Register domain name</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transfer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Multiple Domain name hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NL Quarantine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NL domain registration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">EU domain registration</a></li>
            </ul>
          </div>

          {/* Web Hosting */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Web Hosting</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Web hosting help</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WordPress hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reseller hosting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Domain only</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Email only</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hosting package</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dedicated server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hosting Netherlands</a></li>
            </ul>
          </div>

          {/* VPS & Help */}
          <div>
            <h3 className="font-semibold text-lg mb-4">VPS</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-6">
              <li><a href="#" className="hover:text-primary transition-colors">Linux VPS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Windows VPS</a></li>
            </ul>
            <h3 className="font-semibold text-lg mb-4">Help Desk</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Helpdesk</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IP address information</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">bHosted</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status page</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms and conditions</a></li>
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
