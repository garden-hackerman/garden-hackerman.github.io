
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Truck, Heart, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">Kartoffelkombinat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-green-700 hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#produkte" className="text-green-700 hover:text-green-600 transition-colors font-medium">Produkte</a>
              <a href="#ueber-uns" className="text-green-700 hover:text-green-600 transition-colors font-medium">Über uns</a>
              <a href="#kontakt" className="text-green-700 hover:text-green-600 transition-colors font-medium">Kontakt</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Mitglied werden
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">Kartoffelkombinat</span>
              </div>
              <p className="text-green-200">
                Gemeinsam für nachhaltige Landwirtschaft und regionale Lebensmittel.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#produkte" className="hover:text-white transition-colors">Produkte</a></li>
                <li><a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-green-200">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@kartoffelkombinat.de</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+49 89 123456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>München, Bayern</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Kartoffelkombinat. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
