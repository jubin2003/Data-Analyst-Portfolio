
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code, Database, LineChart, Server, Terminal, 
  GitBranch, BookOpen, PieChart, Network, FileSpreadsheet,
  UserCheck, Brain, Share2, Users, BarChartBig, MessageSquare
} from 'lucide-react';

// Skill data
const technicalSkills = [
  { name: 'Python', icon: <Code size={24} />, category: 'technical' },
  { name: 'SQL', icon: <Database size={24} />, category: 'technical' },
  { name: 'R', icon: <Terminal size={24} />, category: 'technical' },
  { name: 'Power BI', icon: <PieChart size={24} />, category: 'technical' },
  { name: 'Tableau', icon: <LineChart size={24} />, category: 'technical' },
  { name: 'Excel', icon: <FileSpreadsheet size={24} />, category: 'technical' },
  { name: 'BigQuery', icon: <Database size={24} />, category: 'technical' },
  { name: 'Apache Spark', icon: <Server size={24} />, category: 'technical' },
  { name: 'AWS', icon: <Network size={24} />, category: 'technical' },
  { name: 'Git', icon: <GitBranch size={24} />, category: 'technical' },
];

const professionalSkills = [
  { name: 'Data Storytelling', icon: <BookOpen size={24} />, category: 'professional' },
  { name: 'Problem Solving', icon: <Brain size={24} />, category: 'professional' },
  { name: 'Critical Thinking', icon: <Brain size={24} />, category: 'professional' },
  { name: 'Communication', icon: <MessageSquare size={24} />, category: 'professional' },
  { name: 'Collaboration', icon: <Users size={24} />, category: 'professional' },
  { name: 'Business Acumen', icon: <BarChartBig size={24} />, category: 'professional' },
];

// Combine all skills
const allSkills = [...technicalSkills, ...professionalSkills];

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeFilter === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-slate-800 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjwvdGc+Cg==')] -z-10"></div>
      
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Skills & Expertise
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A collection of technical and professional skills I've developed throughout my career.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-slate-700/50">
            {['all', 'technical', 'professional'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize',
                  activeFilter === filter
                    ? 'bg-white dark:bg-slate-700 shadow-sm'
                    : 'hover:bg-white/50 dark:hover:bg-slate-700/50'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={cn(
                'group relative neumorphic p-4 md:p-6 flex flex-col items-center justify-center aspect-square transition-all duration-500',
                hoveredSkill === skill.name ? 'scale-105' : '',
                skill.category === 'technical' ? 'bg-blue-50/50 dark:bg-blue-900/10' : 'bg-purple-50/50 dark:bg-purple-900/10'
              )}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={cn(
                'text-gray-500 dark:text-gray-300 mb-3 transition-transform duration-300 group-hover:scale-110',
                skill.category === 'technical' ? 'text-blue-500 dark:text-blue-400' : 'text-purple-500 dark:text-purple-400'
              )}>
                {skill.icon}
              </div>
              <h3 className="text-center font-medium">{skill.name}</h3>

              {/* Pulsing background on hover */}
              <div className={cn(
                'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500',
                skill.category === 'technical' ? 'bg-blue-500' : 'bg-purple-500'
              )}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
