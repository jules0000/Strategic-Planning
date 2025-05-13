
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

const ProjectManagement = () => {
  const risks = [
    {
      category: "Technical",
      items: [
        { risk: "API integration challenges", level: "Medium", mitigation: "Early prototyping and alternative providers" },
        { risk: "Performance bottlenecks", level: "Medium", mitigation: "Regular performance testing and optimization" }
      ]
    },
    {
      category: "Business",
      items: [
        { risk: "Regulatory changes", level: "High", mitigation: "Regular compliance reviews and legal consultation" },
        { risk: "Market competition", level: "Medium", mitigation: "Unique value proposition and feature differentiation" }
      ]
    },
    {
      category: "Timeline",
      items: [
        { risk: "Resource availability", level: "Low", mitigation: "Careful planning and buffer in timeline" },
        { risk: "Scope creep", level: "High", mitigation: "Strict change management process" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Change Request Process</h4>
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-6">
                  <ProcessStep 
                    number="1" 
                    title="Written Request" 
                    description="All changes must be submitted in writing with clear requirements"
                  />
                  <ProcessStep 
                    number="2" 
                    title="Impact Assessment" 
                    description="Analysis of scope, timeline, and resource impacts"
                  />
                  <ProcessStep 
                    number="3" 
                    title="Approval Process" 
                    description="Review and approval by key stakeholders"
                  />
                  <ProcessStep 
                    number="4" 
                    title="Implementation" 
                    description="Scheduling and executing approved changes"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-4">Change Classification</h4>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Minor Changes (≤4 hours)</h5>
                  <p className="text-sm text-gray-600">Within scope, no additional cost or timeline impact</p>
                  <div className="mt-3 flex">
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      No Impact
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Major Changes (&gt;4 hours)</h5>
                  <p className="text-sm text-gray-600">Requires timeline/resource adjustment</p>
                  <div className="mt-3 flex">
                    <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
                      Timeline Impact
                    </div>
                    <div className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded ml-2">
                      Resource Impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Management</h3>
          
          <div className="space-y-6">
            {risks.map((category, idx) => (
              <div key={idx}>
                <h4 className="font-medium text-gray-700 mb-3">{category.category} Risks</h4>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row justify-between mb-3">
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                          <h5 className="text-gray-800 font-medium">{item.risk}</h5>
                        </div>
                        <div className={`mt-2 md:mt-0 px-2 py-1 rounded text-xs font-medium ${
                          item.level === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : item.level === 'Medium'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {item.level} Risk
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="p-1 rounded bg-gray-100">
                          <ShieldCheck className="h-3 w-3 text-gray-500" />
                        </div>
                        <ArrowRight className="h-3 w-3 text-gray-300 mx-2" />
                        <p className="text-sm text-gray-600">{item.mitigation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <QualityItem 
                title="Testing Strategy" 
                description="Comprehensive approach covering unit, integration, and system testing"
                progress={85}
              />
              <QualityItem 
                title="User Acceptance Testing" 
                description="Formal process for client verification of deliverables"
                progress={70}
              />
            </div>
            <div className="space-y-4">
              <QualityItem 
                title="Performance Optimization" 
                description="Regular benchmarking and optimization for speed and reliability"
                progress={60}
              />
              <QualityItem 
                title="Security Audits" 
                description="Regular vulnerability scans and penetration testing"
                progress={90}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ProcessStep = ({ number, title, description }) => (
  <div className="relative">
    <div className="absolute -left-6 mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-xs font-bold">
      {number}
    </div>
    <h5 className="text-gray-800 font-medium">{title}</h5>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

const QualityItem = ({ title, description, progress }) => (
  <div className="border rounded-lg p-4">
    <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-600 mb-3">{description}</p>
    <div className="flex items-center">
      <Progress value={progress} className="h-2 flex-1" />
      <span className="ml-3 text-xs font-medium text-gray-600">{progress}%</span>
    </div>
  </div>
);

export default ProjectManagement;
