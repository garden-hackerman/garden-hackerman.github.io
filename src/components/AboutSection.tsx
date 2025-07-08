
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Sprout, HandHeart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Users,
      title: "Gemeinschaft",
      description: "Wir sind eine solidarische Gemeinschaft, die zusammen wirtschaftet und das Risiko teilt."
    },
    {
      icon: Heart,
      title: "Nachhaltigkeit",
      description: "Biologischer Anbau ohne Pestizide und Kunstdünger für gesunde Böden und Umwelt."
    },
    {
      icon: Sprout,
      title: "Vielfalt",
      description: "Über 40 verschiedene Gemüsesorten sorgen für Abwechslung in der wöchentlichen Erntekiste."
    },
    {
      icon: HandHeart,
      title: "Transparenz",
      description: "Offene Kalkulation und direkter Kontakt zwischen Erzeugern und Verbrauchern."
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Über den Auergarten
              </h2>
              <p className="text-lg text-green-700 mb-6">
                Wir sind eine Solidarische Landwirtschaft (SoLaWi) im Großraum München. 
                Auf unseren Feldern in Feldkirchen, Haar und Vaterstetten bauen wir 
                gemeinsam mit unseren Mitgliedern vielfältiges Bio-Gemüse an.
              </p>
              <p className="text-lg text-green-700">
                Das Prinzip ist einfach: Am Jahresanfang kalkulieren wir gemeinsam die 
                Kosten für Saatgut, Pacht, Löhne und Maschinen. Diese Kosten werden 
                auf alle Mitglieder umgelegt. Dafür erhalten alle wöchentlich eine 
                Erntekiste mit frischem, saisonalem Gemüse.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                    <value.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-green-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">12</div>
              <div className="text-green-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">200+</div>
              <div className="text-green-600">Mitglieder</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">3</div>
              <div className="text-green-600">Standorte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">40+</div>
              <div className="text-green-600">Gemüsesorten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
