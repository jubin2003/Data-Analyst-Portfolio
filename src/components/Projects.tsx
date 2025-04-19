
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    title: 'Sales Analytics Dashboard',
    summary: 'Interactive visualization of retail sales data',
    description: 'Built a comprehensive dashboard to analyze sales trends, customer demographics, and product performance across multiple retail locations.',
    tools: ['Tableau', 'SQL', 'Excel'],
    image: '/placeholder.svg',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    tags: ['Analytics', 'Dashboards'],
  },
  {
    title: 'Customer Segmentation Model',
    summary: 'ML-based customer clustering analysis',
    description: 'Developed a machine learning model to segment customers based on purchasing behavior, demographics, and engagement metrics.',
    tools: ['Python', 'scikit-learn', 'Pandas'],
    image: '/placeholder.svg',
    github: 'https://github.com/',
    demo: null,
    tags: ['Machine Learning', 'Analytics'],
  },
  {
    title: 'Data Pipeline Automation',
    summary: 'ETL system for marketing campaign data',
    description: 'Created an automated ETL pipeline to extract, transform, and load marketing campaign data from various sources into a centralized database.',
    tools: ['Apache Airflow', 'Python', 'BigQuery'],
    image: '/placeholder.svg',
    github: 'https://github.com/',
    demo: null,
    tags: ['Data Engineering', 'Automation'],
  },
  {
    title: 'Financial Forecasting Tool',
    summary: 'Predictive analysis of financial metrics',
    description: 'Built a time series forecasting tool to predict key financial metrics and visualize future trends for business planning.',
    tools: ['Python', 'Prophet', 'Power BI'],
    image: '/placeholder.svg',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    tags: ['Analytics', 'Forecasting'],
  },
  {
    title: 'Inventory Optimization System',
    summary: 'Real-time stock level management',
    description: 'Developed a system to optimize inventory levels based on historical sales data, lead times, and seasonal demand patterns.',
    tools: ['R', 'Shiny', 'PostgreSQL'],
    image: '/placeholder.svg',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    tags: ['Analytics', 'Dashboards'],
  },
  {
    title: 'Social Media Analytics Platform',
    summary: 'Social engagement and sentiment analysis',
    description: 'Created a platform to analyze social media engagement metrics and perform sentiment analysis on user comments and feedback.',
    tools: ['Python', 'NLTK', 'Tableau'],
    image: '/placeholder.svg',
    github: 'https://github.com/',
    demo: null,
    tags: ['Analytics', 'NLP'],
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
