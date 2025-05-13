import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Users, MessageSquare, AlertCircle } from "lucide-react";

const TeamStructure = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Team</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center p-4 bg-blue-50 rounded-lg">
            <Avatar className="h-16 w-16 border-2 border-blue-200">
              <AvatarImage src="/jules.png" alt="Julia Castro" />
              <AvatarFallback className="bg-blue-500 text-white text-lg">JC</AvatarFallback>
            </Avatar>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h4 className="text-lg font-medium text-gray-800">Julia Ayessa M. Castro</h4>
              <p className="text-gray-600">Full-Stack Developer</p>
              <p className="text-sm text-gray-500 mt-1">Responsible for all technical aspects (Backend, Mobile, UI/UX)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Required Client Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContactCard 
              title="Primary Point of Contact" 
              description="Day-to-day communication and coordination"
              icon={User}
            />
            <ContactCard 
              title="Business Requirements Lead" 
              description="Defines and prioritizes business requirements"
              icon={Users}
            />
            <ContactCard 
              title="User Testing Coordinator" 
              description="Organizes user testing and feedback collection"
              icon={MessageSquare}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Communication Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CommunicationItem 
              title="Regular Updates" 
              items={[
                "Bi-weekly progress meetings",
                "Daily updates via project management tool",
                "Monthly strategic reviews"
              ]}
            />
            <CommunicationItem 
              title="Issue Resolution" 
              items={[
                "Emergency protocol for critical issues",
                "24-hour response commitment",
                "Escalation path for unresolved issues"
              ]}
            />
          </div>
          
          <div className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-amber-800 font-medium">Communication Best Practices</p>
              <p className="text-amber-700 text-sm mt-1">
                Clear, timely communication is critical for project success. All requirements and changes should be documented 
                in writing to ensure alignment and prevent misunderstandings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ContactCard = ({ title, description, icon: Icon }) => (
  <div className="border rounded-lg p-4">
    <div className="flex items-center mb-3">
      <div className="p-2 bg-gray-100 rounded-full mr-3">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
      <h4 className="font-medium text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const CommunicationItem = ({ title, items }) => (
  <div className="border rounded-lg p-4">
    <h4 className="font-medium text-gray-800 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 text-sm">• {item}</li>
      ))}
    </ul>
  </div>
);

export default TeamStructure;
