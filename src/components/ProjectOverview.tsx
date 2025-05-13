
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock } from "lucide-react";

const ProjectOverview = () => {
  const coreDeliverables = [
    "Passenger app: registration, ride booking, tracking, payment, history",
    "Driver app: registration, ride acceptance, navigation, earnings",
    "Admin dashboard: user management, ride monitoring, basic analytics",
    "EV program integration from day one",
    "Support for Android and iOS platforms",
    "Initial launch in Metro Manila",
    "Payments via GCash, credit cards, and cash",
    "English and Filipino language support"
  ];

  const futureConsiderations = [
    "Advanced analytics & route optimization",
    "Geographic expansion",
    "Loyalty program enhancements",
    "Additional payment methods (PayMaya)"
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Deliverables</h3>
            <div className="space-y-3">
              {coreDeliverables.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Future Considerations</h3>
            <div className="space-y-3">
              {futureConsiderations.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Milestones</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-amber-100 text-amber-800 rounded-full px-4 py-1 text-sm font-medium w-max">
                Month 10
              </div>
              <Separator className="hidden md:block h-px w-12 mx-4 bg-gray-300" orientation="horizontal" />
              <p className="mt-2 md:mt-0 text-gray-700 font-medium">Soft Launch</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm font-medium w-max">
                Month 12
              </div>
              <Separator className="hidden md:block h-px w-12 mx-4 bg-gray-300" orientation="horizontal" />
              <p className="mt-2 md:mt-0 text-gray-700 font-medium">Full Launch</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
