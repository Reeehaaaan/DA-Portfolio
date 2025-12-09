import { useEffect, useState, useRef } from "react";
import { BarChart3, Database, Users, Award } from "lucide-react";

const stats = [
  { icon: BarChart3, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Database, value: 10, suffix: "M+", label: "Data Points Analyzed" },
  { icon: Users, value: 25, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 2, suffix: "+", label: "Years Experience" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div className="glass-card rounded-2xl p-8 text-center hover-glow transition-all duration-300 hover:-translate-y-1">
      <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
        <stat.icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold mb-2">
        <span className="text-gradient">{count}</span>
        <span className="text-gradient">{stat.suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium">{stat.label}</p>
    </div>
  );
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
