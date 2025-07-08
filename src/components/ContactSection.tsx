
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Kontakt & Mitgliedschaft
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Haben Sie Interesse an einer Mitgliedschaft oder Fragen zu unserer 
            Solidarischen Landwirtschaft? Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Vorname
                  </label>
                  <Input placeholder="Ihr Vorname" className="border-green-200 focus:border-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">
                    Nachname
                  </label>
                  <Input placeholder="Ihr Nachname" className="border-green-200 focus:border-green-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  E-Mail
                </label>
                <Input type="email" placeholder="ihre.email@beispiel.de" className="border-green-200 focus:border-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Betreff
                </label>
                <Input placeholder="Interesse an Mitgliedschaft" className="border-green-200 focus:border-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-2">
                  Nachricht
                </label>
                <Textarea 
                  placeholder="Ihre Nachricht..." 
                  rows={5}
                  className="border-green-200 focus:border-green-500"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Nachricht senden
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Kontaktinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">E-Mail</h4>
                    <p className="text-green-600">info@auergarten.de</p>
                    <p className="text-green-600">mitgliedschaft@auergarten.de</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Telefon</h4>
                    <p className="text-green-600">+49 89 456 789 012</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Standorte</h4>
                    <p className="text-green-600">
                      Feldkirchen-Westerham<br />
                      Haar bei München<br />
                      Vaterstetten
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Abholzeiten</h4>
                    <p className="text-green-600">
                      Mittwoch: 15:00 - 19:00 Uhr<br />
                      Samstag: 9:00 - 13:00 Uhr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-600 text-white border-green-600">
              <CardHeader>
                <CardTitle className="text-white">Mitglied werden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-green-100">
                  Werden Sie Teil unserer Solidarischen Landwirtschaft und 
                  erhalten Sie wöchentlich frisches Bio-Gemüse aus der Region.
                </p>
                <div className="space-y-3 mb-6 text-green-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3" />
                    Wöchentliche Erntekiste (ca. 6-8 kg)
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3" />
                    100% Bio-Qualität
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3" />
                    Mitsprache bei der Anbauplanung
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-3" />
                    Mithilfe auf dem Feld möglich
                  </div>
                </div>
                <Button className="w-full bg-white text-green-600 hover:bg-green-50">
                  Jetzt Mitglied werden
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
