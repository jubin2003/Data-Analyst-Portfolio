
import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-slate-900 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Passionate data professional with expertise in transforming complex datasets into actionable business insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl neumorphic">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <span className="text-lg font-medium">Your Photo</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg border border-gray-100 dark:border-slate-700">
                <div className="text-3xl">👨‍💻</div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 space-y-5 transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Who I Am
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                I'm a data professional with 5+ years of experience analyzing and visualizing data to drive business decisions. My background combines technical expertise with strong business acumen, allowing me to bridge the gap between data and strategic insights.
              </p>
              
              <div className="pt-2">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Industries I've Worked With:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Finance', 'Healthcare', 'Technology', 'E-commerce', 'Manufacturing'].map((industry) => (
                    <span 
                      key={industry}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  What I Do:
                </h4>
                <ul className="space-y-2">
                  {[
                    'Develop interactive dashboards and data visualizations',
                    'Build ETL pipelines and data processing workflows',
                    'Perform statistical analysis and predictive modeling',
                    'Translate business questions into data queries',
                    'Communicate insights to technical and non-technical stakeholders'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
