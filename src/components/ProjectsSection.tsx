import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Automotive Warranty Analysis",
    description: "Built an end-to-end data analytics pipeline using Python, SQL, and Power BI to extract insights from 190K+ automotive records.",
    image: null,
    icon: BarChart3,
    tools: ["Python", "SQL", "Power BI", "Excel", "Power Point"],
    liveUrl: "https://github.com/Reeehaaaan/automotive_warranty_analysis",
    githubUrl: "https://github.com/Reeehaaaan/automotive_warranty_analysis",
  },
  {
    title: "Healthcare SQL Analytics",
    description: "Data-driven analysis of synthetic healthcare records using SQL to uncover patient, treatment, and operational insights.",
    image: null,
    icon: TrendingUp,
    tools: ["Python", "SQL", "Scikit-learn", "Matplotlib", "Seaborn", "Excel"],
    liveUrl: "https://github.com/Reeehaaaan/healthcare-sql-analytics",
    githubUrl: "",
  },
  {
    title: "Financial Risk Analytics",
    description: "End-to-end SQL analysis of financial transactions to identify trends, anomalies, and performance patterns.",
    image: null,
    icon: PieChart,
    tools: ["Python", "SQL", "Matplotlib", "Seaborn", "Excel"],
    liveUrl: "https://github.com/Reeehaaaan/finance-data-analystics",
    githubUrl: "https://github.com/Reeehaaaan/finance-data-analystics",
  },
  {
    title: "Interactive Tableau Dashboard",
    description: "A collection of interactive Tableau visualizations showcasing insights across healthcare, finance, and operational datasets.",
    image: null,
    icon: LineChart,
    tools: ["Tableau", "Excel"],
    liveUrl: "https://public.tableau.com/app/profile/rehan.r2114/vizzes",
    githubUrl: "https://public.tableau.com/app/profile/rehan.r2114/vizzes",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const Icon = project.icon;

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover-glow transition-all duration-300 hover:-translate-y-2">
      {/* Project Image/Icon */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
        <Icon className="h-20 w-20 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Button asChild size="sm" className="flex-1 gap-2">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View Project
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">My Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of data analysis projects showcasing my analytical skills and visualization expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://github.com/Reeehaaaan?tab=repositories" target="_blank" rel="noopener noreferrer">
                View All Projects
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
