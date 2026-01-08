import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About", href: "/#about" },
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
    <footer className="relative pt-20 pb-8 border-t border-white/[0.06]">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-display font-bold mb-4">
              JARVIS <span className="text-primary">2026</span>
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
                  className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-muted-foreground hover:bg-white/[0.1] hover:text-foreground hover:border-white/[0.15] transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide uppercase">
              Featured Events
            </h4>
            <ul className="space-y-3">
              {events.map((event) => (
                <li key={event.name}>
                  <Link
                    to={event.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {event.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:jarvis@citchennai.edu"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  jarvis@citchennai.edu
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
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
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 JARVIS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
