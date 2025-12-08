import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "Interactive dashboard analyzing sales trends, customer segmentation, and revenue forecasting for a retail company.",
    image: null,
    icon: BarChart3,
    tools: ["Python", "Tableau", "SQL", "Pandas"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Customer Churn Prediction",
    description: "Machine learning model to predict customer churn with 92% accuracy, enabling proactive retention strategies.",
    image: null,
    icon: TrendingUp,
    tools: ["Python", "Scikit-learn", "Power BI", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Market Basket Analysis",
    description: "Association rule mining to uncover purchasing patterns and optimize product placement strategies.",
    image: null,
    icon: PieChart,
    tools: ["R", "SQL", "Tableau", "Excel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial Risk Analytics",
    description: "Comprehensive risk assessment model analyzing market volatility and portfolio optimization.",
    image: null,
    icon: LineChart,
    tools: ["Python", "TensorFlow", "Plotly", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
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
        </div>
      </div>
    </section>
  );
};
