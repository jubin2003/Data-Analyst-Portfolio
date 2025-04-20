import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Add types for card data
interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

// Add types for CardContent props
interface CardContentProps {
  overview: string;
  technologies: string[];
  achievements: string[];
}

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card: CardData, index: number) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section
      id="featured-projects"
      className="w-full h-full py-8 sm:py-12 md:py-16"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative inline-block px-2">
            Interests & Achievements
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </h2>
        </div>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

// Shared CardContent component with TypeScript types
const CardContent: React.FC<CardContentProps> = ({
  overview,
  technologies,
  achievements,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-2xl sm:rounded-3xl mb-4">
      <p className="text-portfolioText dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-portfolioPrimary dark:text-portfolioAccent">
          Overview:
        </span>{" "}
        {overview}
      </p>

      <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="neumorphic p-4 sm:p-6 rounded-lg sm:rounded-xl">
          <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-portfolioPrimary dark:text-portfolioAccent">
            Topics / Tools
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white dark:bg-slate-700 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="neumorphic p-4 sm:p-6 rounded-lg sm:rounded-xl">
          <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-portfolioPrimary dark:text-portfolioAccent">
            Key Highlights
          </h4>
          <ul className="space-y-1.5 sm:space-y-2 text-portfolioText dark:text-gray-300 text-sm sm:text-base">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                <span className="break-words">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Type the data array
const data: CardData[] = [
  {
    category: "Leadership",
    title: "Best Cadet - NCC Achievement",
    src: "/Ncc.png",
    content: (
      <CardContent
        overview="Honored with the Best Cadet award in NCC for excellence in leadership, discipline, and teamwork. Participated in various national-level camps and drills."
        technologies={[
          "Leadership",
          "Teamwork",
          "Discipline",
          "Public Speaking",
        ]}
        achievements={[
          "Awarded Best Cadet in 2022",
          "Completed A certificates",
          "Led a 100-member contingent",
        ]}
      />
    ),
  },
  {
    category: "Research",
    title: "Exploring Data-Driven Development",
    src: "/research.png",
    content: (
      <CardContent
        overview="Passionate about exploring the intersection of data and development, focusing on real-world applications and user-driven decision making."
        technologies={["Python", "R", "SQL", "Data Analysis"]}
        achievements={[
          "Conducted research on data patterns",
          "Developed predictive models",
          "Created data visualization dashboards",
        ]}
      />
    ),
  },
  {
    category: "Innovation",
    title: "Building Smart Solutions with Data",
    src: "/data.png",
    content: (
      <CardContent
        overview="Creating innovative solutions using data analytics and automation to solve real-world problems efficiently."
        technologies={["Power BI", "Python", "Automation", "ML"]}
        achievements={[
          "Built automated data pipelines",
          "Developed analytics dashboards",
          "Implemented ML solutions",
        ]}
      />
    ),
  },
  {
    category: "Community",
    title: "Volunteer Work in Data Literacy",
    src: "/community.png",
    content: (
      <CardContent
        overview="Contributing to community development through data literacy programs and educational initiatives."
        technologies={["Teaching", "Mentoring", "Data Skills", "Communication"]}
        achievements={[
          "Led community workshops",
          "Mentored aspiring data analysts",
          "Created learning resources",
        ]}
      />
    ),
  },
  {
    category: "Development",
    title: "Passion for Research and R&D Projects",
    src: "/learning.png",
    content: (
      <CardContent
        overview="Engaging in continuous research and development projects to stay at the forefront of data science and analytics."
        technologies={[
          "Research",
          "Analysis",
          "Documentation",
          "Problem Solving",
        ]}
        achievements={[
          "Completed research projects",
          "Published technical articles",
          "Developed case studies",
        ]}
      />
    ),
  },
  {
    category: "Curiosity",
    title: "Lifelong Learner & Data Enthusiast",
    src: "/public/curosity.png",
    content: (
      <CardContent
        overview="I strongly believe in continuous learning. I read research papers and build personal projects to expand my skills."
        technologies={["Coursera", "Kaggle", "YouTube", "GitHub"]}
        achievements={[
          "Completed courses on data and AI",
          "Participated in data competitions",
          "Maintain a personal blog on learning data science",
        ]}
      />
    ),
  },
];
