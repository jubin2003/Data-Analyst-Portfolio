import React, { useState, useRef } from "react";
import {
  Send,
  Linkedin,
  Github,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ExternalLink,
  Clock,
  FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current as HTMLFormElement,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        // Reset form
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        toast({
          title: "Error sending message",
          description:
            "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/30 dark:via-slate-900 dark:to-purple-950/30 relative"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="animated-gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* Main contact form - spans 2 columns on desktop */}
          <div className="md:col-span-2 glass-card p-8 animate-fade-in h-full">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <MessageSquare size={20} className="mr-2 text-primary" />
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-slate-800/70 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex justify-center items-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Secondary bento boxes - column of smaller cards */}
          <div className="space-y-4">
            {/* Location card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-primary">
                <MapPin size={18} className="mr-2" />
                Location
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  Kottayam, Kerala, India
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Available for remote work worldwide
                </p>
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mt-3">
                  <iframe
                    title="Office location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31472.055694381634!2d76.49999310942667!3d9.594667506903557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xbe2b02f68f8dd06e!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1745133118610!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact details card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-primary">
                <Phone size={18} className="mr-2" />
                Contact Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <a
                    href="mailto:jubinthomas023@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    jubinthomas023@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <a
                    href="tel:+919995965348"
                    className="hover:text-primary transition-colors"
                  >
                    +91 9995965348
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <span>Mon - Sun, 9:00 - 17:00 EST</span>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-primary">
                <ExternalLink size={18} className="mr-2" />
                Connect
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://linkedin.com/in/jubinthomas2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={24} className="text-primary mb-2" />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/jubin2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-primary/10 transition-colors"
                >
                  <Github size={24} className="text-primary mb-2" />
                  <span className="text-xs">GitHub</span>
                </a>
                <a
                  href="mailto:jubinthomas023@gmail.com"
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-primary/10 transition-colors"
                >
                  <Mail size={24} className="text-primary mb-2" />
                  <span className="text-xs">Email</span>
                </a>
              </div>

              {/* QR code for resume */}
              <div className="mt-4 flex flex-col items-center">
                <a
                  href="/public/Jubin_Thomas_DA_Resume__.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-primary hover:underline text-sm inline-flex items-center gap-2"
                >
                  <FileText size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
