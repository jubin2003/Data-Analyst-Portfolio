import React from "react";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-data-pattern"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top section with logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-gray-200 dark:border-slate-700">
          {/* Brand section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              DataWhisper
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mt-2">
              Transforming data into actionable insights for businesses and
              organizations.
            </p>
          </div>
        </div>

        {/* Middle section with links and social */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Projects
              </a>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">More</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#experience"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#education"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <address className="not-italic flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
              <p>Kottayam, Kerala, India</p>
              <a
                href="mailto:jubinthomas023@gmail.com"
                className="hover:text-primary transition-colors"
              >
                jubinthomas023@gmail.com
              </a>
              <a
                href="tel:+919995965348"
                className="hover:text-primary transition-colors"
              >
                +919995965348
              </a>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Social</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jubin2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/jubinthomas2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:jubinthomas023@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
             
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Follow me on social media for updates on my latest projects and
              insights.
            </p>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-1">
            <span>&copy; {currentYear} Jubin Thomas. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-accent" /> and
              data
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
