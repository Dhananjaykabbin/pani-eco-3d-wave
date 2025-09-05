import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import FloatingBottle from "./FloatingBottle";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-scale-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-water bg-clip-text text-transparent">
                  Pure
                </span>{" "}
                <span className="text-foreground">Water,</span>
                <br />
                <span className="bg-gradient-eco bg-clip-text text-transparent">
                  Pure
                </span>{" "}
                <span className="text-foreground">Future</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience premium hydration with Pani's eco-friendly water bottles. 
                Crafted for sustainability, designed for life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-water text-primary-foreground shadow-water hover:shadow-eco transition-all duration-300 px-8 py-4 text-lg"
              >
                Discover Pani
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Fresh Water</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Reusable</div>
              </div>
            </div>
          </div>

          {/* 3D Bottle */}
          <div className="h-[600px] lg:h-[700px] w-full">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#87CEEB" />
              
              <Suspense fallback={null}>
                <FloatingBottle />
                <Environment preset="city" />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
                autoRotate
                autoRotateSpeed={1}
              />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-primary rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-secondary rounded-full opacity-30"></div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-primary rounded-full opacity-25"></div>
      </div>
    </section>
  );
};

export default Hero;