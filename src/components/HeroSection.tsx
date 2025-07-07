
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-400/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="h-4 w-4" />
              <span>100% Bio & Regional</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-green-900 leading-tight">
              Frisches Gemüse
              <span className="block text-green-600">direkt vom Feld</span>
            </h1>
            <p className="text-xl text-green-700 leading-relaxed">
              Werde Teil unserer Gemeinschaft und erhalte wöchentlich frisches, 
              biologisches Gemüse direkt von unseren lokalen Partnerhöfen. 
              Nachhaltig, fair und transparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
              >
                Jetzt Mitglied werden
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                Mehr erfahren
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">500+</div>
                <div className="text-green-600">Mitglieder</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">15</div>
                <div className="text-green-600">Partnerhöfe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">100%</div>
                <div className="text-green-600">Bio-Qualität</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Leaf className="h-24 w-24 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Frisch & Regional</h3>
                  <p className="text-green-100">
                    Gemüse aus der Region für die Region
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-80 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
