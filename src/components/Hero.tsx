
import React, { useState, useEffect } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

// List of roles for the typewriter effect
const roles = ['Data Analyst', 'Data Engineer', 'Business Analyst'];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at end of word
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Deleting speed
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
  }, [displayText, isTyping, roleIndex]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Blink rate
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 -z-10"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0wIDMwIEw2MCAzMCBNMzAgMCBMMzAgNjAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=')] -z-10"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-5xl animate-fade-in">
        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div>
            <h2 className="inline-block text-lg md:text-xl font-medium px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 mb-6">
              <span className="text-primary">👋</span> Hello, I'm <span className="font-semibold">Your Name</span>
            </h2>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforming <span className="animated-gradient-text">Data</span> into 
            <br className="hidden md:block" /> Actionable <span className="animated-gradient-text">Insights</span>
          </h1>
          
          {/* Typewriter effect */}
          <div className="h-14 flex justify-center items-center">
            <div className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 inline-flex items-center">
              <span className="mr-2">I'm a</span>
              <span className="text-primary font-bold min-w-[12ch] text-left">
                {displayText}
                <span className={cn("inline-block w-0.5 h-7 bg-primary ml-1 relative -top-0.5", 
                  showCursor ? "opacity-100" : "opacity-0"
                )}></span>
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            >
              Get in Touch
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3.5 glass-button flex items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Explore More</span>
        <a 
          href="#about" 
          className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} className="text-gray-500 dark:text-gray-400" />
        </a>
      </div>
    </section>
  );
};
