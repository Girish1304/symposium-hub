import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
    { name: "Schedule", href: "/schedule" },
    { name: "Register", href: "/register" },
  ];

  const events = [
    { name: "Robo War", href: "/events" },
    { name: "RC Adventure", href: "/events" },
    { name: "Line Following", href: "/events" },
    { name: "Tech Quiz", href: "/events" },
  ];

  return (
    <footer className="relative pt-24 pb-8 border-t border-primary/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      <div className="absolute inset-0 bg-hex-pattern opacity-10" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Animated scan line */}
      <motion.div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">
                <span className="text-foreground">JARVIS</span>
                <span className="text-gradient"> 2026</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              The premier technical symposium bringing together innovators, 
              creators, and future tech leaders.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-primary/30 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-3 transition-all" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-3 transition-all" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary" />
              Events
            </h4>
            <ul className="space-y-3">
              {events.map((event) => (
                <li key={event.name}>
                  <Link
                    to={event.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-secondary group-hover:w-3 transition-all" />
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:jarvis@citchennai.edu"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <div className="w-8 h-8 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  jarvis@citchennai.edu
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Chennai Institute of Technology<br />
                  Sarathy Nagar, Kundrathur - 600069
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground font-mono">
              © 2026 JARVIS. All systems operational.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-mono">
            <a href="#" className="hover:text-primary transition-colors">Privacy.Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Terms.Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;