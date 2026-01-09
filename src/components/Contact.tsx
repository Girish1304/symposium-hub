import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const glassyTextStyle = {
  color: 'hsl(180, 100%, 70%)',
  textShadow: `
    0 0 10px hsl(180, 100%, 50%, 0.8),
    0 0 20px hsl(180, 100%, 50%, 0.5),
    0 0 40px hsl(180, 100%, 50%, 0.3)
  `,
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99627 75469",
      href: "tel:+919962775469"
    },
    {
      icon: Mail,
      label: "Email",
      value: "jarvis2026@citchennai.net",
      href: "mailto:jarvis2026@citchennai.net"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Chennai Institute of Technology, Kundrathur, Chennai - 600069",
      href: "https://maps.google.com/?q=Chennai+Institute+of+Technology"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(180,100%,50%,0.03)] to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[hsl(180,100%,50%,0.08)] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[hsl(180,100%,50%,0.05)] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.3)] rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-2 h-2 bg-[hsl(180,100%,50%)] rounded-full animate-pulse shadow-[0_0_10px_hsl(180,100%,50%)]" />
            <span className="text-sm font-medium text-[hsl(180,100%,70%)] uppercase tracking-wide">Get In Touch</span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 uppercase"
            style={glassyTextStyle}
          >
            Contact Us
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: 'hsl(180, 50%, 70%)',
              textShadow: '0 0 10px hsl(180, 100%, 50%, 0.3)',
            }}
          >
            Have questions about JARVIS 2026? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[hsl(180,100%,50%,0.03)] backdrop-blur-sm border border-[hsl(180,100%,50%,0.2)] rounded-2xl p-8">
              <h3 
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={glassyTextStyle}
              >
                <MessageSquare className="w-6 h-6 text-[hsl(180,100%,70%)]" style={{ filter: 'drop-shadow(0 0 8px hsl(180, 100%, 50%, 0.8))' }} />
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[hsl(180,80%,70%)]">
                    Your Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(180,60%,50%)]" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="pl-10 bg-[hsl(200,20%,10%,0.5)] border-[hsl(180,100%,50%,0.3)] focus:border-[hsl(180,100%,50%)] text-[hsl(180,80%,80%)] placeholder:text-[hsl(180,30%,40%)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[hsl(180,80%,70%)]">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(180,60%,50%)]" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="pl-10 bg-[hsl(200,20%,10%,0.5)] border-[hsl(180,100%,50%,0.3)] focus:border-[hsl(180,100%,50%)] text-[hsl(180,80%,80%)] placeholder:text-[hsl(180,30%,40%)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[hsl(180,80%,70%)]">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-[hsl(200,20%,10%,0.5)] border-[hsl(180,100%,50%,0.3)] focus:border-[hsl(180,100%,50%)] text-[hsl(180,80%,80%)] placeholder:text-[hsl(180,30%,40%)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[hsl(180,80%,70%)]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                    className="bg-[hsl(200,20%,10%,0.5)] border-[hsl(180,100%,50%,0.3)] focus:border-[hsl(180,100%,50%)] text-[hsl(180,80%,80%)] placeholder:text-[hsl(180,30%,40%)] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(180,100%,50%)] hover:bg-[hsl(180,100%,60%)] text-black font-bold py-6 shadow-[0_0_25px_hsl(180,100%,50%,0.4)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[hsl(180,100%,50%,0.03)] backdrop-blur-sm border border-[hsl(180,100%,50%,0.2)] rounded-2xl p-8">
              <h3 
                className="text-2xl font-bold mb-6"
                style={glassyTextStyle}
              >
                Get in Touch
              </h3>
              <p 
                className="mb-8"
                style={{
                  color: 'hsl(180, 40%, 60%)',
                  textShadow: '0 0 5px hsl(180, 100%, 50%, 0.2)',
                }}
              >
                Whether you have questions about registration, events, workshops, or anything else, our team is ready to answer all your questions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === "Address" ? "_blank" : undefined}
                    rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(180,100%,50%,0.05)] border border-[hsl(180,100%,50%,0.15)] hover:border-[hsl(180,100%,50%,0.4)] transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-[hsl(180,100%,50%,0.1)] border border-[hsl(180,100%,50%,0.2)] group-hover:bg-[hsl(180,100%,50%)] group-hover:border-transparent transition-all">
                      <info.icon className="w-6 h-6 text-[hsl(180,100%,70%)] group-hover:text-black transition-colors" style={{ filter: 'drop-shadow(0 0 6px hsl(180, 100%, 50%, 0.8))' }} />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(180,50%,50%)]">{info.label}</p>
                      <p 
                        className="font-medium"
                        style={{
                          color: 'hsl(180, 80%, 70%)',
                          textShadow: '0 0 8px hsl(180, 100%, 50%, 0.4)',
                        }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-[hsl(180,100%,50%,0.08)] backdrop-blur-sm border border-[hsl(180,100%,50%,0.3)] rounded-2xl p-6 text-center">
              <h4 
                className="text-xl font-bold mb-2"
                style={glassyTextStyle}
              >
                Quick Response Guaranteed
              </h4>
              <p 
                style={{
                  color: 'hsl(180, 40%, 60%)',
                  textShadow: '0 0 5px hsl(180, 100%, 50%, 0.2)',
                }}
              >
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
