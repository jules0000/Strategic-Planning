
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Database, Layout, ShieldCheck, Plug } from "lucide-react";

const TechnicalArchitecture = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="tech-stack" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tech-stack">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechStackCard 
              title="Backend" 
              icon={Server}
              color="bg-indigo-100 text-indigo-600"
              items={["Node.js", "Express", "PostgreSQL"]} 
            />
            <TechStackCard 
              title="Frontend" 
              icon={Layout}
              color="bg-blue-100 text-blue-600"
              items={["React Native", "Expo"]} 
            />
            <TechStackCard 
              title="Database" 
              icon={Database}
              color="bg-green-100 text-green-600"
              items={["PostgreSQL", "Redis for caching"]} 
            />
            <TechStackCard 
              title="Infrastructure" 
              icon={Server}
              color="bg-orange-100 text-orange-600"
              items={["AWS/Azure (based on preference)"]} 
            />
            <TechStackCard 
              title="Real-time" 
              icon={Plug}
              color="bg-purple-100 text-purple-600"
              items={["Socket.IO"]} 
            />
            <TechStackCard 
              title="Authentication" 
              icon={ShieldCheck}
              color="bg-red-100 text-red-600"
              items={["JWT", "OAuth 2.0"]} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Integration Points</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <IntegrationItem 
                    title="Payment Gateways" 
                    description="GCash, Credit Cards, Cash handling" 
                  />
                  <IntegrationItem 
                    title="Mapping Services" 
                    description="Google Maps, Waze integration for navigation" 
                  />
                </div>
                <div className="space-y-4">
                  <IntegrationItem 
                    title="SMS/Notifications" 
                    description="Twilio, Firebase for push notifications" 
                  />
                  <IntegrationItem 
                    title="Para Solar & EV Charging" 
                    description="Integration with Para Solar systems and EV charging networks" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compliance">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Compliance & Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ComplianceItem 
                  title="Data Privacy" 
                  items={[
                    "Philippine Data Privacy Act compliant",
                    "User consent management",
                    "Data minimization practices"
                  ]} 
                />
                <ComplianceItem 
                  title="Payment Security" 
                  items={[
                    "PCI-DSS compliance",
                    "Tokenization of payment details",
                    "Secure payment processing"
                  ]} 
                />
                <ComplianceItem 
                  title="Regulatory" 
                  items={[
                    "LTFRB regulations compliance",
                    "Transportation network company requirements",
                    "Local business regulations"
                  ]} 
                />
                <ComplianceItem 
                  title="System Security" 
                  items={[
                    "End-to-end encryption",
                    "Regular security audits",
                    "Data retention policies"
                  ]} 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const TechStackCard = ({ title, icon: Icon, color, items }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg mr-3 ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h4 className="text-lg font-medium text-gray-800">{title}</h4>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <p key={index} className="text-gray-600">• {item}</p>
        ))}
      </div>
    </CardContent>
  </Card>
);

const IntegrationItem = ({ title, description }) => (
  <div className="border rounded-lg p-4">
    <h4 className="font-medium text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ComplianceItem = ({ title, items }) => (
  <div className="border rounded-lg p-4">
    <h4 className="font-medium text-gray-800 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 text-sm">• {item}</li>
      ))}
    </ul>
  </div>
);

export default TechnicalArchitecture;
