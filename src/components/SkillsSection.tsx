import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming & Databases",
    skills: ["SQL", "Python"],
  },
  {
    title: "Visualization Tools",
    skills: ["Power BI", "Tableau", "Excel"],
  },
  {
    title: "Python Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "DevOps & Collaboration",
    skills: ["Azure", "Git", "GitHub", "Jira"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">My Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for extracting insights from data
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
