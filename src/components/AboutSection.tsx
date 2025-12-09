import { MapPin, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto">
            {/* Content */}
            <div>
              <p className="text-primary font-medium mb-4">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Turning Data into <span className="text-gradient">Decisions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm a passionate data analyst with expertise in transforming raw data into 
                meaningful insights. With a background in statistics and a keen eye for 
                visualization, I help businesses make data-driven decisions that matter.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                My approach combines rigorous analytical methods with creative storytelling, 
                ensuring that insights are not just accurate but also accessible and actionable 
                for stakeholders at all levels.
              </p>

              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bengaluru, India</p>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Briefcase className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">Data Analyst — 2 YoE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
