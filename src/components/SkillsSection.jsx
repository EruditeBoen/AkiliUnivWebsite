import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Math:
  { name: "Algebra", level: 100, category: "Math" },
  { name: "Geometry", level: 100, category: "Math" },
  { name: "Linear Algebra", level: 100, category: "Math" },
  { name: "Calculus", level: 100, category: "Math" },
  { name: "Proofs & Logic", level: 100, category: "Math" },
  { name: "Probability & Statistics", level: 100, category: "Math" },

  // Science:
  { name: "Computer Science", level: 100, category: "Science" },
  { name: "Electrical Engineering", level: 100, category: "Science" },
  { name: "Mechanical Engineering", level: 100, category: "Science" },
  { name: "Physics", level: 100, category: "Science" },
  { name: "Chemistry", level: 100, category: "Science" },
  { name: "Biology", level: 100, category: "Science" },

  // Humanities
  { name: "Economics", level: 100, category: "Humanities" },
  { name: "Philosophy", level: 100, category: "Humanities" },
  { name: "History", level: 100, category: "Humanities" },
  { name: "US Law", level: 100, category: "Humanities" },
  { name: "Writing", level: 100, category: "Humanities" },
  { name: "Digital Art", level: 100, category: "Humanities" },
];

const categories = ["all", "Math", "Science", "Humanities"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="curriculum" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Curriculum  <span className="text-primary"> Preview  </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
