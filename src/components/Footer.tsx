import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  return (
    <footer className="bg-[#1a2332] text-white">
      {/* Newsletter Section */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/70 mb-8">
              Get hosting tips, tutorials, and exclusive offers delivered to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#2a3645] border-[#2a3645] text-white placeholder:text-white/50 h-12"
              />
              <Button type="submit" className="h-12 px-8 bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* About bHosted */}
            <div>
              <h3 className="font-semibold text-lg mb-4">About bHosted</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Data centers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Web Hosting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">WordPress Hosting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">VPS Hosting</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Domain Names</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SSL Certificates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Email Hosting</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Video Tutorials</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">System Status</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-2">
                  <Mail className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-white/50 text-xs mb-1">Email</p>
                    <a href="mailto:info@bhosted.nl" className="text-white hover:text-primary transition-colors">
                      info@bhosted.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-white/50 text-xs mb-1">Phone</p>
                    <a href="tel:+31202261311" className="text-white hover:text-primary transition-colors">
                      +31 20 226 13 11
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-3">Follow us</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-10 h-10 bg-[#2a3645] rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#2a3645] rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#2a3645] rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#2a3645] rounded-lg flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
                      <Youtube size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img src="/bhosted-logo.svg" alt="bHosted" className="h-6" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">SLA</a>
            </div>
            <p className="text-sm text-white/50">© 2025 bHosted. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
