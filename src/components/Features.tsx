import { Droplets, Leaf, Recycle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Droplets,
      title: "Premium Hydration",
      description: "Advanced filtration technology ensures every drop is pure and refreshing.",
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Made from sustainable materials with zero environmental impact.",
      color: "text-secondary"
    },
    {
      icon: Recycle,
      title: "Infinitely Reusable",
      description: "Durable design built to last a lifetime, reducing plastic waste.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "BPA-Free Safety",
      description: "Completely safe materials ensure your health is never compromised.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-water bg-clip-text text-transparent">Pani</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just water - it's a commitment to your health and our planet's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border hover:shadow-glass transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-glass backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-border">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Join the <span className="bg-gradient-eco bg-clip-text text-transparent">Sustainability</span> Movement
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every Pani bottle prevents 1,000+ plastic bottles from polluting our oceans. 
              Be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-background/80 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-sm text-muted-foreground">Plastic Bottles Saved</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Countries Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;