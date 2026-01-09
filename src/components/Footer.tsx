import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Workshops", href: "/workshops" },
    { name: "Register", href: "/register" },
  ];

  const events = [
    { name: "Robo War", href: "/events" },
    { name: "RC Adventure", href: "/events" },
    { name: "Line Following", href: "/events" },
    { name: "Tech Quiz", href: "/events" },
  ];

  return (
    <footer ref={ref} className="relative pt-16 pb-8 border-t border-border bg-card/30">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4 uppercase">
              JARVIS <span className="text-[hsl(32,100%,50%)]">2026</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-xs">
              The premier technical symposium bringing together innovators, 
              creators, and future tech leaders.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:bg-[hsl(170,100%,50%)] hover:text-black hover:border-[hsl(170,100%,50%)] transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-[hsl(170,100%,50%)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-bold mb-4 text-foreground text-sm tracking-wide uppercase">
              Featured Events
            </h4>
            <ul className="space-y-3">
              {events.map((event) => (
                <li key={event.name}>
                  <Link
                    to={event.href}
                    className="text-muted-foreground hover:text-[hsl(170,100%,50%)] transition-colors text-sm"
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-foreground text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919962775469"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[hsl(170,100%,50%)] transition-colors text-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  +91 99627 75469
                </a>
              </li>
              <li>
                <a
                  href="mailto:jarvis2026@citchennai.net"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[hsl(170,100%,50%)] transition-colors text-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  jarvis2026@citchennai.net
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <div className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="pt-2">
                  Chennai Institute of Technology<br />
                  Kundrathur, Chennai - 600069
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 JARVIS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-[hsl(170,100%,50%)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[hsl(170,100%,50%)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
