
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carrot, Apple, Wheat, Milk } from "lucide-react";

const ProductSection = () => {
  const products = [
    {
      icon: Carrot,
      title: "Frisches Gemüse",
      description: "Saisonales Gemüse direkt von unseren Partnerhöfen",
      items: ["Kartoffeln", "Karotten", "Brokkoli", "Spinat", "Tomaten"]
    },
    {
      icon: Apple,
      title: "Obst",
      description: "Süße und saftige Früchte aus regionalem Anbau",
      items: ["Äpfel", "Birnen", "Beeren", "Steinobst", "Nüsse"]
    },
    {
      icon: Wheat,
      title: "Getreide & Brot",
      description: "Vollkorn-Getreide und frisches Brot vom Bäcker",
      items: ["Dinkel", "Weizen", "Roggen", "Haferflocken", "Brot"]
    },
    {
      icon: Milk,
      title: "Milchprodukte",
      description: "Frische Milchprodukte von glücklichen Kühen",
      items: ["Milch", "Käse", "Joghurt", "Butter", "Quark"]
    }
  ];

  return (
    <section id="produkte" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Unsere Produkte
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Entdecke unser vielfältiges Sortiment an frischen, biologischen 
            Lebensmitteln aus der Region. Alles saisonal und nachhaltig produziert.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit group-hover:bg-green-200 transition-colors">
                  <product.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800">{product.title}</CardTitle>
                <CardDescription className="text-green-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-green-700">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
