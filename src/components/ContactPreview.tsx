import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, HelpCircle, ArrowRightCircle, CheckCircle, ClipboardList } from "lucide-react";

const officeDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Chennai (Avadi)", "Tamil Nadu, India"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+91 9080537672", "+91 9445257630"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["prpowerinfra@gmail.com"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat", "9:00 AM – 7:00 PM"],
    color: "from-purple-500 to-indigo-500",
  },
];

const timelineSteps = [
  {
    icon: ClipboardList,
    title: "Step 1: Share Your Requirement",
    description: "Tell us about your project, scope, and expectations.",
  },
  {
    icon: Phone,
    title: "Step 2: We Contact You",
    description: "Our engineering team connects with you within 24 hours.",
  },
  {
    icon: ArrowRightCircle,
    title: "Step 3: Site/Project Evaluation",
    description: "We analyze your site conditions and technical needs.",
  },
  {
    icon: CheckCircle,
    title: "Step 4: Final Proposal",
    description: "You receive a clear, professional quotation and execution plan.",
  },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide engineering, installation, testing, commissioning, and maintenance for power infrastructure projects."
  },
  {
    q: "How quickly can I get a quote?",
    a: "We typically respond within 24 hours with project-specific details."
  },
  {
    q: "Do you work across India?",
    a: "Yes. We deliver turnkey solutions across multiple states."
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. Our engineers can conduct site visits upon request."
  },
];

const ContactPreview = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-600">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg mt-3">
            We're here to assist you with everything you need.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {officeDetails.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.06,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col items-start gap-3"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-md`}
                >
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h4>
                {card.lines.map((l, j) => (
                  <p key={j} className="text-gray-600 text-sm">{l}</p>
                ))}
              </motion.div>
            );
          })}
        </div>



        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-orange-600 text-center mb-10"
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                className="p-5 rounded-xl bg-gray-100 border border-gray-200 hover:bg-white transition cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {faq.q}
                    </h4>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPreview;
