
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Package, Calendar, FileText } from "lucide-react";

const CommercialTerms = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Value</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <ValueItem 
                  icon={DollarSign} 
                  label="Total Project Value" 
                  value="PHP 1,632,000" 
                  color="text-green-600"
                />
                <ValueItem 
                  icon={DollarSign} 
                  label="Monthly Payment" 
                  value="PHP 136,000" 
                  color="text-red-600"
                />
              </div>
              <div className="space-y-4">
                <ValueItem 
                  icon={Calendar} 
                  label="Project Duration" 
                  value="12 months" 
                  color="text-red-600"
                />
                <ValueItem 
                  icon={FileText} 
                  label="Payment Terms" 
                  value="Net-15" 
                  color="text-gray-600"
                />
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Payment Schedule</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliverable</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <PaymentRow month="1" amount="PHP 136,000" deliverable="Planning & Design Phase" />
                    <PaymentRow month="2" amount="PHP 136,000" deliverable="Backend Development (1/3)" />
                    <PaymentRow month="3" amount="PHP 136,000" deliverable="Backend Development (2/3)" />
                    <PaymentRow month="4" amount="PHP 136,000" deliverable="Backend Development (3/3)" />
                    <PaymentRow month="5" amount="PHP 136,000" deliverable="Mobile App Development (1/5)" />
                    <PaymentRow month="6" amount="PHP 136,000" deliverable="Mobile App Development (2/5)" />
                    <PaymentRow month="7-9" amount="PHP 408,000" deliverable="Mobile App Development (3-5/5)" />
                    <PaymentRow month="10-12" amount="PHP 408,000" deliverable="Testing & Deployment" highlight={true} note="Soft Launch (M10) & Full Launch (M12)" />
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">IP & Deliverables</h3>
            <div className="space-y-4">
              <div className="p-3 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-800">Intellectual Property</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Complete IP transfer to client upon final payment and project completion
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Final Deliverables</h4>
                <div className="space-y-2">
                  <DeliverableItem title="Source Code" description="Complete GitHub repository transfer" />
                  <DeliverableItem title="Technical Documentation" description="System architecture, setup guides, etc." />
                  <DeliverableItem title="User/Admin Manuals" description="Comprehensive usage documentation" />
                  <DeliverableItem title="API Documentation" description="Complete API reference for integrations" />
                  <DeliverableItem title="Post-Launch Support" description="30 days of support after launch" />
                  <DeliverableItem title="Training Sessions" description="Admin and technical team training" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <NextStepCard number="1" title="Contract Finalization" color="bg-red-500" />
            <NextStepCard number="2" title="Stakeholder Identification" color="bg-red-600" />
            <NextStepCard number="3" title="Communication Setup" color="bg-red-700" />
            <NextStepCard number="4" title="Project Kickoff Meeting" color="bg-red-800" />
            <NextStepCard number="5" title="Development Environment Setup" color="bg-red-900" />
          </div>
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">
              <span className="font-medium">Note:</span> All specific requirements, technical details, and 
              timelines are subject to final contract terms and project planning phase outcomes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ValueItem = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center">
    <div className="p-3 bg-gray-100 rounded-lg mr-4">
      <Icon className={`h-5 w-5 ${color}`} />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`font-semibold ${color}`}>{value}</p>
    </div>
  </div>
);

const PaymentRow = ({ month, amount, deliverable, highlight = false, note = "" }) => (
  <tr className={highlight ? "bg-red-50" : ""}>
    <td className="px-4 py-3 text-sm text-gray-800">{month}</td>
    <td className="px-4 py-3 text-sm text-gray-800 font-medium">{amount}</td>
    <td className="px-4 py-3 text-sm text-gray-800">
      {deliverable}
      {note && (
        <span className="ml-2 text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
          {note}
        </span>
      )}
    </td>
  </tr>
);

const DeliverableItem = ({ title, description }) => (
  <div className="flex items-start">
    <Package className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
    <div>
      <p className="text-sm font-medium text-gray-700">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);

const NextStepCard = ({ number, title, color }) => (
  <div className={`${color} text-white rounded-lg p-4 flex flex-col items-center text-center h-full`}>
    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mb-2">
      {number}
    </div>
    <p className="font-medium">{title}</p>
  </div>
);

export default CommercialTerms;
