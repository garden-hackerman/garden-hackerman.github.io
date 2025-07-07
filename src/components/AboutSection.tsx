
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Truck, Leaf } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Users,
      title: "Gemeinschaft",
      description: "Wir sind eine solidarische Gemeinschaft, die gemeinsam nachhaltige Landwirtschaft unterstützt."
    },
    {
      icon: Heart,
      title: "Nachhaltigkeit",
      description: "Umweltschutz und faire Bedingungen für Landwirte stehen im Zentrum unserer Arbeit."
    },
    {
      icon: Truck,
      title: "Regional",
      description: "Kurze Transportwege und Unterstützung der lokalen Landwirtschaft sind uns wichtig."
    },
    {
      icon: Leaf,
      title: "Bio-Qualität",
      description: "100% biologische Produkte ohne Pestizide und chemische Zusätze."
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-green-900 mb-6">
                Über das Kartoffelkombinat
              </h2>
              <p className="text-lg text-green-700 mb-6">
                Wir sind eine solidarische Landwirtschaftsgemeinschaft, die sich für 
                nachhaltige Lebensmittelproduktion und faire Partnerschaften einsetzt. 
                Seit unserer Gründung haben wir uns zum Ziel gesetzt, frische, 
                biologische Lebensmittel direkt vom Erzeuger zu den Verbrauchern zu bringen.
              </p>
              <p className="text-lg text-green-700">
                Unsere Mitglieder erhalten wöchentlich eine bunte Gemüsekiste mit 
                saisonalen Produkten und unterstützen damit gleichzeitig lokale 
                Landwirte und nachhaltige Anbaumethoden.
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
              <div className="text-3xl font-bold text-green-800 mb-2">8</div>
              <div className="text-green-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">500+</div>
              <div className="text-green-600">Zufriedene Mitglieder</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">15</div>
              <div className="text-green-600">Partner-Höfe</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-800 mb-2">2000</div>
              <div className="text-green-600">Kisten pro Woche</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
