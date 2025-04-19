
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-data-pattern"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top section with logo and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-gray-200 dark:border-slate-700">
          {/* Brand section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">DataWhisper</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm mt-2">
              Transforming data into actionable insights for businesses and organizations.
            </p>
          </div>

          {/* Newsletter section */}
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your email for updates"
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Middle section with links and social */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Projects</a>
            </nav>
          </div>
          
          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">More</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</a>
              <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Blog</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <address className="not-italic flex flex-col space-y-2 text-gray-600 dark:text-gray-400">
              <p>New York City, NY</p>
              <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">contact@example.com</a>
              <a href="tel:+15555555555" className="hover:text-primary transition-colors">+1 (555) 555-5555</a>
            </address>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Social</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="/portfolio.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
                aria-label="Portfolio PDF"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Follow me on social media for updates on my latest projects and insights.</p>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-1">
            <span>&copy; {currentYear} Your Name. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center">Made with <Heart size={14} className="mx-1 text-accent" /> and data</span>
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
            Built with React, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
};
