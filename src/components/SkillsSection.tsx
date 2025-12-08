const skillCategories = [
  {
    title: "Programming & Analytics",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
      { name: "Excel/VBA", level: 85 },
    ],
  },
  {
    title: "Visualization Tools",
    skills: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Matplotlib/Seaborn", level: 88 },
      { name: "Plotly", level: 80 },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Apache Spark", level: 65 },
      { name: "ETL Pipelines", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow", level: 65 },
      { name: "Statistical Modeling", level: 85 },
      { name: "NLP", level: 70 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out group-hover:opacity-80"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

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
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
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
