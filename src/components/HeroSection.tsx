
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const slideImages = [
    {
      src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop",
      alt: "Fresh vegetables from our fields",
      title: "Frisches Gemüse aus solidarischer Landwirtschaft"
    },
    {
      src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=600&fit=crop",
      alt: "Community harvest day",
      title: "Gemeinsam ernten, gemeinsam teilen"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
      alt: "Organic farming practices",
      title: "100% Bio-Qualität aus der Region"
    },
    {
      src: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=1200&h=600&fit=crop",
      alt: "Seasonal produce variety",
      title: "Saisonale Vielfalt das ganze Jahr"
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Slideshow */}
      <div className="relative">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {slideImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h2 className="text-3xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                        {image.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
      </div>

      {/* Main Hero Content */}
      <div className="py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-400/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="h-4 w-4" />
                <span>Solidarische Landwirtschaft</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-green-900 leading-tight">
                Gemüse aus
                <span className="block text-green-600">solidarischer Landwirtschaft</span>
              </h1>
              <p className="text-xl text-green-700 leading-relaxed">
                Wir sind eine Solidarische Landwirtschaft im Großraum München. 
                Zusammen mit unseren Mitgliedern bauen wir Gemüse an und teilen 
                Ernte, Kosten und Risiko. Frisch, regional und nachhaltig.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
                >
                  Mitglied werden
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
                  <div className="text-2xl font-bold text-green-800">200+</div>
                  <div className="text-green-600">Mitglieder</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">3</div>
                  <div className="text-green-600">Standorte</div>
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
                    <h3 className="text-2xl font-bold mb-2">Auergarten</h3>
                    <p className="text-green-100">
                      Solidarische Landwirtschaft München
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-80 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
