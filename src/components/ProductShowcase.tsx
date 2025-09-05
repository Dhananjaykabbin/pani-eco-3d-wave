import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import waterBottleHero from "@/assets/water-bottle-hero.jpg";

const ProductShowcase = () => {
  const products = [
    {
      name: "Pani Classic",
      price: "$29.99",
      originalPrice: "$39.99",
      image: waterBottleHero,
      rating: 4.9,
      reviews: 1234,
      features: ["500ml Capacity", "BPA-Free", "Leak-Proof", "Dishwasher Safe"],
      badge: "Best Seller"
    },
    {
      name: "Pani Sport",
      price: "$34.99",
      originalPrice: "$44.99",
      image: waterBottleHero,
      rating: 4.8,
      reviews: 892,
      features: ["750ml Capacity", "Grip Handle", "Ice Retention", "UV Protected"],
      badge: "New"
    },
    {
      name: "Pani Premium",
      price: "$49.99",
      originalPrice: "$59.99",
      image: waterBottleHero,
      rating: 5.0,
      reviews: 567,
      features: ["1L Capacity", "Temperature Display", "Smart Cap", "App Connected"],
      badge: "Premium"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-water bg-clip-text text-transparent">Product</span> Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect Pani bottle for your lifestyle. Each one crafted with care for you and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group bg-card/80 backdrop-blur-sm border-border hover:shadow-water transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-eco text-secondary-foreground">
                  {product.badge}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                </div>

                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-gradient-water text-primary-foreground shadow-water hover:shadow-eco transition-all duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-eco text-secondary-foreground shadow-eco hover:shadow-water transition-all duration-300 px-8 py-4"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;