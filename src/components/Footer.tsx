import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import paniLogo from "@/assets/pani-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={paniLogo} alt="Pani" className="h-8 w-8 filter invert" />
              <span className="text-2xl font-bold text-background">Pani</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Leading the revolution in sustainable hydration. Pure water, pure future, pure conscience.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-background hover:text-foreground hover:bg-background/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-foreground hover:bg-background/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-foreground hover:bg-background/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background hover:text-foreground hover:bg-background/20">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#home" className="block text-background/80 hover:text-background transition-colors">
                Home
              </a>
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">
                About Us
              </a>
              <a href="#products" className="block text-background/80 hover:text-background transition-colors">
                Products
              </a>
              <a href="#sustainability" className="block text-background/80 hover:text-background transition-colors">
                Sustainability
              </a>
              <a href="#contact" className="block text-background/80 hover:text-background transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Support</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Customer Service
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Shipping Info
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Returns & Exchanges
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Size Guide
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-background">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@pani.com</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-background">Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/20 border-background/30 text-background placeholder:text-background/60"
                />
                <Button className="bg-background text-foreground hover:bg-background/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Pani. All rights reserved. Made with 💚 for a sustainable future.
            </p>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;