
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    title: "Sales Insights Dashboard",
    summary: "Visual analysis of sales performance for hardware goods",
    description:
      "Designed an interactive Power BI dashboard to analyze sales trends for AtliQ hardware. The solution provides clear visibility into sales data and supports strategic decisions to boost revenue, with a projected 7% increase in the next quarter.",
    tools: ["Power BI", "SQL"],
    image: "/dashboard.png",
    github: "https://github.com/jubin2003", // replace with actual if available
    demo: null,
    tags: ["Analytics", "Dashboards"],
  },
  {
    title: "Supply Chain Performance Analytics",
    summary: "KPI dashboard for FMCG supply chain tracking",
    description:
      "Built a Power BI dashboard to track supply chain KPIs (OT%, IF%, OTIF%) for AtliQ Mart, helping identify delivery inefficiencies. The insights enabled proactive issue resolution and a potential 20% cost saving before expansion.",
    tools: ["Power BI", "Excel"],
    image: "/supplychain.png",
    github: "https://github.com/jubin2003", // replace with actual if available
    demo: null,
    tags: ["Analytics", "Supply Chain"],
  },
  {
    title: "HR Data Analytics Dashboard",
    summary: "Employee data tracking and workforce insights",
    description:
      "Created a Power BI dashboard for HR to monitor attendance, work hours, leaves, and performance. The solution streamlined daily HR tasks and saved 3–4 hours of manual effort each day.",
    tools: ["Power BI", "Excel"],
    image: "/HR.png",
    github: "https://github.com/jubin2003", // replace with actual if available
    demo: null,
    tags: ["Analytics", "Dashboards"],
  },
  {
    title: "Hotel Booking Analytics",
    summary: "Booking trend analysis and business performance tracking",
    description:
      "Developed a dashboard using Power BI, Excel, and SQL to visualize hotel booking patterns, cancellations, and seasonal trends. Enabled business stakeholders to optimize pricing and occupancy strategies.",
    tools: ["Power BI", "Excel", "SQL"],
    image: "/hotel booking.png",
    github: "https://github.com/jubin2003",
    demo: null,
    tags: ["Analytics", "Dashboards"],
  },
  {
    title: "Event Management System",
    summary: "End-to-end event planning and tracking tool",
    description:
      "Built a complete event management solution to handle planning, registration, and performance metrics. The system simplified coordination and improved participant tracking and feedback collection.",
    tools: ["Excel", "Power BI"],
    image: "/event-management.png",
    github: "https://github.com/jubin2003",
    demo: null,
    tags: ["Automation", "Dashboards"],
  },
  {
    title: "Blinkit Sales Dashboard",
    summary: "E-commerce analytics for Blinkit",
    description:
      "Created a sales analytics dashboard to track Blinkit performance metrics including category sales, delivery times, and regional trends. Supported data-driven decision-making for logistics and inventory.",
    tools: ["Power BI", "Excel"],
    image: "/blinkit.png",
    github: "https://github.com/jubin2003",
    demo: null,
    tags: ["Analytics", "E-commerce"],
  },
  {
    title: "Amazon Web Scraper with Alerts",
    summary: "Real-time product tracking and alerting system",
    description:
      "Built a Python-based scraper to monitor Amazon product prices and availability. Included real-time alerts for price drops using email notifications, enabling users to grab the best deals quickly.",
    tools: ["Python", "BeautifulSoup", "SMTP"],
    image: "/amazon-scrapping.jpeg",
    github: "https://github.com/jubin2003/Amazon-Web-Scrapping-Project-Python",
    demo: null,
    tags: ["Automation", "Web Scraping"],
  },
  {
    title: "Cardamom Price Analyzer",
    summary: "Commodity price tracking with alerts",
    description:
      "Developed a tool to analyze cardamom prices from various sources and send automated alerts for significant fluctuations. Helped stakeholders make timely buying/selling decisions.",
    tools: ["Python", "BeautifulSoup", "Email API"],
    image: "/project_image_cardamom.jpeg",
    github: "https://github.com/jubin2003/Cardamom-Price-Python-Project",
    demo: null,
    tags: ["Analytics", "Automation"],
  },
];

// Unique tags
const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

export const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = activeTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-slate-900">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Featured Projects
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A selection of data projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm transition-all duration-300',
                activeTag === tag 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className={cn(
                'glass-card group transition-all duration-500',
                expandedProject === project.title ? 'scale-105 z-10' : ''
              )}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project title */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                {/* Summary */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.summary}</p>
                
                {/* Tools used */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Description - shown on expand */}
                {expandedProject === project.title && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 my-4 animate-fade-in">
                    {project.description}
                  </p>
                )}
                
                {/* Actions */}
                <div className="flex items-center justify-between mt-2">
                  <button 
                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                    className="text-sm text-primary hover:underline"
                  >
                    {expandedProject === project.title ? 'Show less' : 'Learn more'}
                  </button>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
