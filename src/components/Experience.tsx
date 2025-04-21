
import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Experience data
const experiences = [
  {
    company: "Accenture",
    logo: "/Accenture_logo.svg",
    role: "Data Analytics and Visualization Intern",
    period: "May 2023",
    location: "Remote",
    achievements: [
      "Built 15+ interactive dashboards in Power BI, improving report accuracy by 40%",
      "Developed ETL pipelines using Python, reducing data processing errors by 30%",
      "Automated repetitive tasks, saving 5+ hours weekly and increasing efficiency",
      "Authored technical documentation that streamlined onboarding by 50%",
      "Optimized SQL queries, reducing data retrieval time by 30%",
      "Performed EDA on large datasets to identify business trends that led to a 15% improvement in strategic decisions",
    ],
  },

  {
    company: "Accenture – Strategy Consulting Virtual Internship",
    logo: "/Accenture_logo.svg",
    role: "Strategy Consulting Intern",
    period: "Feb 2023 - Mar 2023",
    location: "Virtual",
    achievements: [
      "Redesigned user journeys and assembled strategic plans for mock client projects",
      "Performed outcomes analysis and set project priorities for consulting simulations",
      "Conducted prioritization and impact assessments to optimize business strategies",
      "Completed error identification and language selection exercises for global implementation scenarios",
    ],
  },
  {
    company: "Quantium – Data Analytics Job Simulation",
    logo: "/quantium-logo.jpg",
    role: "Data Analytics Job Simulation Trainee",
    period: "March 2025",
    location: "Virtual",
    achievements: [
      "Completed hands-on tasks in data preparation and customer analytics using transactional datasets",
      "Identified benchmark stores for uplift testing on trial store layouts",
      "Created detailed reports for the Category Manager to support strategic decision-making",
      "Developed actionable commercial insights with strong analytical reasoning",
    ],
  },
];

export const Experience = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="animated-gradient-text">Professional Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey in the world of data.
          </p>
        </div>

        {/* Cards view for smaller screens */}
        <div className="md:hidden space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={`mobile-${experience.company}`}
              ref={el => timelineRefs.current[index] = el}
              className="opacity-0 neumorphic p-6 space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center overflow-hidden shadow-md">
                  <img src={experience.logo} alt={`${experience.company} logo`} className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-primary">{experience.company}</h3>
                  <div className="font-medium">{experience.role}</div>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1.5" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1.5" />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="text-primary mr-2 mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline view for medium and larger screens */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
          
          {/* Timeline items */}
          {experiences.map((experience, index) => (
            <div 
              key={`desktop-${experience.company}`}
              ref={el => timelineRefs.current[index + experiences.length] = el}
              className={cn(
                "relative mb-20 opacity-0 flex",
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              )}
            >
              {/* Timeline dot and connector */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 bg-primary shadow-lg"></div>
              </div>

              {/* Content side */}
              <div className={cn(
                "w-5/12",
                index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
              )}>
                <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={cn(
                    "flex items-center gap-4 mb-4",
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  )}>
                    {/* Company logo */}
                    <div className={cn(
                      index % 2 === 0 ? "order-2" : "order-1",
                      "w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center overflow-hidden shadow-sm"
                    )}>
                      <img src={experience.logo} alt={`${experience.company} logo`} className="w-6 h-6" />
                    </div>
                    
                    <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                      {/* Company name */}
                      <h3 className="font-bold text-lg text-primary">{experience.company}</h3>
                      {/* Role title */}
                      <div className="font-medium">{experience.role}</div>
                    </div>
                  </div>
                  
                  {/* Time period and location */}
                  <div className={cn(
                    "flex flex-col mb-4 text-sm text-gray-500 dark:text-gray-400",
                    index % 2 === 0 ? "items-end" : "items-start"
                  )}>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin size={14} className="mr-1.5" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <ul className={cn(
                    "space-y-2 text-gray-600 dark:text-gray-300",
                    index % 2 === 0 ? "text-right" : "text-left"
                  )}>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className={cn(
                        "flex items-start",
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      )}>
                        {index % 2 === 0 && <span>{achievement}</span>}
                        <span className="text-primary mx-2 mt-1.5">•</span>
                        {index % 2 !== 0 && <span>{achievement}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
