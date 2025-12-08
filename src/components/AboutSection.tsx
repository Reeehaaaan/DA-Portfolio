import { User, MapPin, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image/Visual Side */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <User className="w-32 h-32 text-muted-foreground/30" />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 glow-effect">
                  <div className="text-2xl font-bold text-gradient">5+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
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
                    <p className="font-medium">Your City, Country</p>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Briefcase className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">Senior Data Analyst</p>
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
