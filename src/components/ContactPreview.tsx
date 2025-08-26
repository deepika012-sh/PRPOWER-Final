import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9080537672", "+91 9445257630"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["prpowerinfra@gmail.com"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Chennai (Avadi)", "Tamil Nadu, India"],
    color: "from-orange-500 to-amber-500",
  },
];

const ContactPreview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.user_name,
      from_email: data.user_email,
      service: data.service,
      message: data.message,
    };

    emailjs
      .send(
        "pr_power", // ✅ Your EmailJS Service ID
        "template_ghkceht", // ✅ Your NEW Template ID
        templateParams,
        "oy6X13CAfsK_PoPpN" // ✅ Your Public Key
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast.error("❌ Failed to send message.");
      });
  };

  return (
    <section className="py-20 bg-background">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Power your next project with confidence. Talk to our experts.
            </p>

            {contactInfo.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-6 mb-4 bg-card border border-border rounded-xl shadow group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center`}
                  >
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {contact.title}
                    </h4>
                    {contact.details.map((d, j) => (
                      <p
                        key={j}
                        className="text-muted-foreground text-sm hover:text-primary cursor-pointer"
                      >
                        {d}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl shadow-md border border-border"
          >
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Quick Inquiry
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">
                    Full Name
                  </label>
                  <Input
                    {...register("user_name", { required: true })}
                    placeholder="Name"
                  />
                  {errors.user_name && (
                    <span className="text-xs text-red-500">
                      Name is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    {...register("user_email", { required: true })}
                    placeholder="you@email.com"
                  />
                  {errors.user_email && (
                    <span className="text-xs text-red-500">
                      Email is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Service Interested In
                </label>
                <select
                  className="w-full px-3 py-2 border border-muted rounded-md"
                  {...register("service")}
                >
                  <option value="">Select a service</option>
                  <option value="Engineering">Engineering Services</option>
                  <option value="Installation">Installation Services</option>
                  <option value="Testing">Testing & Commissioning</option>
                  <option value="Supply">Supply Services</option>
                  <option value="OM">O&M Services</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea
                  {...register("message", { required: true })}
                  placeholder="Write your message..."
                  rows={4}
                  className="resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-500">
                    Message is required
                  </span>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#F26B1D] to-yellow-400 text-white hover:scale-105 transition"
              >
                <Send className="w-5 h-5 mr-2" /> Send Message

              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
