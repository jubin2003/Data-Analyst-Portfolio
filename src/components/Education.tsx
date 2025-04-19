
import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

// Education data
const educationItems = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'University of Data Analytics',
    period: '2016 - 2018',
    description: 'Specialized in machine learning and statistical analysis with a focus on business applications.',
    courses: ['Advanced Machine Learning', 'Statistical Methods', 'Data Visualization', 'Big Data Systems'],
    achievements: ['GPA: 3.9/4.0', 'Graduate Research Award']
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Tech State University',
    period: '2012 - 2016',
    description: 'Foundation in computer science with minor in statistics.',
    courses: ['Algorithms', 'Database Systems', 'Data Structures', 'Statistical Analysis'],
    achievements: ['Dean\'s List (4 semesters)', 'Undergraduate Research Assistant']
  }
];

// Certification data
const certifications = [
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'May 2023',
    icon: '/placeholder.svg'
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'November 2022',
    icon: '/placeholder.svg'
  },
  {
    name: 'AWS Certified Data Analytics - Specialty',
    issuer: 'Amazon Web Services',
    date: 'March 2021',
    icon: '/placeholder.svg'
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-white dark:bg-slate-900">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Education & Certifications
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education column */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-bold">Academic Education</h3>
              </div>

              <div className="space-y-12">
                {educationItems.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-100 dark:border-slate-700">
                    {/* Education dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold">{item.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1.5" />
                        <span>{item.period}</span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      
                      {/* Relevant courses */}
                      <div>
                        <h5 className="font-medium mb-2">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, i) => (
                            <span 
                              key={i} 
                              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h5 className="font-medium mb-2">Achievements:</h5>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications column */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 h-full">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center">
                        <img src={cert.icon} alt={`${cert.issuer} logo`} className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{cert.name}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar size={12} className="mr-1.5" />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
