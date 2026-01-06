import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "Registration",
    questions: [
      {
        question: "How do I register for JARVIS 2026?",
        answer: "You can register by clicking the 'Register' button on our website. Fill in your details, select the events/workshops you want to participate in, and complete the payment process. You'll receive a confirmation email with your registration details."
      },
      {
        question: "What is the registration fee?",
        answer: "Registration fees vary by event and workshop. Technical events range from ₹100-₹500 per team, and workshops are priced between ₹200-₹500 per participant. Bundle packages are available for multiple registrations."
      },
      {
        question: "Can I register on the spot?",
        answer: "Yes, spot registrations are available on the event day, subject to availability. However, we recommend pre-registering online to secure your slot as popular events fill up quickly."
      },
      {
        question: "Is there a group discount available?",
        answer: "Yes! Groups of 5 or more participants from the same college get a 10% discount. Contact us at jarvis2026@citchennai.net to avail this offer."
      },
    ]
  },
  {
    category: "Events",
    questions: [
      {
        question: "Can I participate in multiple events?",
        answer: "Yes, you can participate in multiple events as long as their timings don't overlap. Check the schedule section to plan your participation accordingly."
      },
      {
        question: "What should I bring for robotics events?",
        answer: "Bring your robot, spare parts, tools, and any required batteries. Power supply will be available at the venue. Make sure your robot meets the specifications mentioned in the event rules."
      },
      {
        question: "Are there any prerequisites for participating?",
        answer: "Most events are open to all college students. Some technical events may require basic knowledge of robotics or programming. Check individual event descriptions for specific requirements."
      },
      {
        question: "Will certificates be provided?",
        answer: "Yes, all participants will receive participation certificates. Winners will receive special merit certificates along with cash prizes and trophies."
      },
    ]
  },
  {
    category: "Workshops",
    questions: [
      {
        question: "Do I need prior experience for workshops?",
        answer: "Our workshops are designed for beginners to intermediate level. Basic understanding of the subject helps, but trainers will cover fundamentals. Check the workshop description for specific prerequisites."
      },
      {
        question: "Will workshop materials be provided?",
        answer: "Yes, all necessary materials, components, and software access will be provided during the workshop. You'll also receive digital resources and notes after the session."
      },
      {
        question: "Can I attend multiple workshops?",
        answer: "You can register for multiple workshops if their timings don't conflict. Each workshop requires separate registration."
      },
    ]
  },
  {
    category: "Logistics",
    questions: [
      {
        question: "Where is the venue located?",
        answer: "JARVIS 2026 is held at Chennai Institute of Technology, Kundrathur, Chennai - 600069. The campus is easily accessible by public transport and has ample parking space."
      },
      {
        question: "Is food available at the venue?",
        answer: "Yes, the college canteen and food stalls will be operational throughout the event. Lunch packages are available for registered participants at a nominal cost."
      },
      {
        question: "Is accommodation available for outstation participants?",
        answer: "Limited accommodation is available in nearby hotels. Contact our team for assistance with accommodation arrangements. Early booking is recommended."
      },
      {
        question: "What are the event timings?",
        answer: "The event runs from 8:30 AM to 5:00 PM on February 4, 2026. Registration desk opens at 8:00 AM. We recommend arriving early to avoid rush."
      },
    ]
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-circuit-pattern opacity-15" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/40 border border-primary/30 mb-6">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about JARVIS 2026
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="relative"
            >
              {/* Category Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden">
                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-6 py-4 border-b border-primary/20">
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                {/* Questions */}
                <Accordion type="single" collapsible className="px-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.category}-${index}`}
                      className="border-b border-border/30 last:border-0"
                    >
                      <AccordionTrigger className="px-4 py-4 text-left hover:text-primary transition-colors text-sm md:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
