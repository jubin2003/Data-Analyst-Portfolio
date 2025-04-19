
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="featured-projects" className="w-full h-full py-16">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block">
          Featured Data Projects
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-gray-50 dark:bg-slate-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-portfolioText dark:text-gray-300 text-base md:text-xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-portfolioPrimary dark:text-portfolioAccent">
                Project Overview:
              </span>{" "}
              This data visualization project transformed complex customer behavior patterns into actionable insights, resulting in a 27% increase in user engagement and 18% higher retention rates within the first quarter after implementation.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neumorphic p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-portfolioPrimary dark:text-portfolioAccent">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'Scikit-Learn', 'Tableau', 'SQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="neumorphic p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-portfolioPrimary dark:text-portfolioAccent">Key Achievements</h4>
                <ul className="space-y-2 text-portfolioText dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Reduced data processing time by 65%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Increased prediction accuracy to 94%</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="w-full md:w-4/5 h-64 md:h-80 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500">Project Dashboard Visualization</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <a href="#" className="px-6 py-2 bg-portfolioPrimary text-white rounded-full hover:bg-portfolioPrimary/90 transition-colors">
                View Project
              </a>
              <a href="#" className="px-6 py-2 border border-portfolioPrimary text-portfolioPrimary rounded-full hover:bg-portfolioPrimary/10 transition-colors">
                GitHub Repository
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Data Visualization",
    title: "Customer Behavior Analysis Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Machine Learning",
    title: "Predictive Analytics for Retail",
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Data Engineering",
    title: "ETL Pipeline for Real-time Analytics",
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Business Intelligence",
    title: "Sales Performance Monitoring System",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Data Science",
    title: "Customer Segmentation Analysis",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "NLP",
    title: "Sentiment Analysis for Customer Feedback",
    src: "https://images.unsplash.com/photo-1468971050039-be99497410af?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
];
