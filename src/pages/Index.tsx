
import { useState } from 'react';
import ProjectOverview from '@/components/ProjectOverview';
import DevelopmentTimeline from '@/components/DevelopmentTimeline';
import TechnicalArchitecture from '@/components/TechnicalArchitecture';
import TeamStructure from '@/components/TeamStructure';
import ProjectManagement from '@/components/ProjectManagement';
import CommercialTerms from '@/components/CommercialTerms';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-r from-red-600 to-red-800 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Para Ride-Hailing Application</h1>
              <p className="text-red-100 text-lg">Strategic Planning Proposal</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg text-white border border-white/20">
              <p className="text-sm">Project Duration: <span className="font-medium">12 Months</span></p>
              <p className="text-sm">Status: <span className="font-medium text-lime-300">Pre-Planning Phase</span></p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600">
              Project Para is a comprehensive ride-hailing application designed for the Philippine market, with a focus on electric vehicles and sustainable transportation. The application consists of passenger and driver apps, an admin dashboard, and integrates with various payment methods and mapping services. <span className="font-medium">Development is scheduled to begin on May 15, 2025.</span>
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <ProjectOverview />
          </TabsContent>
          
          <TabsContent value="timeline">
            <DevelopmentTimeline />
          </TabsContent>
          
          <TabsContent value="technical">
            <TechnicalArchitecture />
          </TabsContent>
          
          <TabsContent value="team">
            <TeamStructure />
          </TabsContent>
          
          <TabsContent value="management">
            <ProjectManagement />
          </TabsContent>
          
          <TabsContent value="commercial">
            <CommercialTerms />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 Para Ride-Hailing Application. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">Last updated: May 13, 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
