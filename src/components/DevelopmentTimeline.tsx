
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Code2, 
  Smartphone, 
  TestTube,
  CheckCircle2
} from "lucide-react";

const DevelopmentTimeline = () => {
  const phases = [
    {
      id: 1,
      title: "Planning & Design",
      duration: "1 Month",
      progress: 0,
      icon: Calendar,
      items: [
        "Wireframes, UI/UX (Figma)",
        "Database schema (PostgreSQL)",
        "Technical specifications"
      ],
      status: "Not Started - Begins May 15"
    },
    {
      id: 2,
      title: "Backend Development",
      duration: "3 Months",
      progress: 0,
      icon: Code2,
      items: [
        "API development (Node.js)",
        "Authentication & user management",
        "Payment integration",
        "Real-time features (Socket.IO)"
      ],
      status: "Pending"
    },
    {
      id: 3,
      title: "Mobile App Development",
      duration: "5 Months",
      progress: 0,
      icon: Smartphone,
      items: [
        "Frontend (React Native with Expo)",
        "Core feature implementation",
        "Maps & GPS integration"
      ],
      status: "Pending"
    },
    {
      id: 4,
      title: "Testing & Deployment",
      duration: "3 Months",
      progress: 0,
      icon: TestTube,
      items: [
        "Beta testing program",
        "Security optimization",
        "App store submissions"
      ],
      status: "Pending"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">12-Month Development Plan (Starting May 15, 2025)</h3>
          <div className="w-full bg-gray-100 h-8 rounded-full mb-6 overflow-hidden">
            <div className="h-full flex">
              <div className="bg-red-500 h-full w-[8.33%] flex items-center justify-center text-xs text-white">
                1
              </div>
              <div className="bg-red-600 h-full w-[25%] flex items-center justify-center text-xs text-white">
                2-4
              </div>
              <div className="bg-red-700 h-full w-[41.67%] flex items-center justify-center text-xs text-white">
                5-9
              </div>
              <div className="bg-red-800 h-full w-[25%] flex items-center justify-center text-xs text-white">
                10-12
              </div>
            </div>
          </div>
          <div className="text-xs font-medium flex justify-between text-gray-500 mb-10">
            <span>Month 1</span>
            <span>Month 4</span>
            <span>Month 9</span>
            <span>Month 12</span>
          </div>
          
          <div className="space-y-8">
            {phases.map((phase) => (
              <div key={phase.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-4 ${
                      phase.progress === 100 
                        ? 'bg-green-100 text-green-600' 
                        : phase.progress > 0 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-gray-100 text-gray-600'
                    }`}>
                      <phase.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{phase.title}</h4>
                      <p className="text-sm text-gray-500">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-auto flex flex-col items-start md:items-end">
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">{phase.status}</span>
                      {phase.progress === 100 && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                    </div>
                    <div className="flex items-center mt-1 w-full md:w-48">
                      <Progress value={phase.progress} className="h-2" />
                      <span className="ml-2 text-xs font-medium">{phase.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="ml-12 space-y-1">
                  {phase.items.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-600">• {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DevelopmentTimeline;
