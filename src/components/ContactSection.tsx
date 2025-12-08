import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com", username: "your.email@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", username: "/in/yourprofile" },
  { icon: Github, label: "GitHub", href: "https://github.com/yourusername", username: "@yourusername" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourhandle", username: "@yourhandle" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss data-driven solutions? 
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 glow-effect">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - CTA */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Ready to transform your data?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you need help with data analysis, visualization, or building 
                  predictive models, I'm here to help turn your data into insights.
                </p>
                <Button asChild size="lg" className="gap-2 group">
                  <a href="mailto:your.email@example.com">
                    Send me an email
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Right Side - Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Connect with me</h4>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.username}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
