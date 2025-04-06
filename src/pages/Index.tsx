
import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { OverviewCard } from "@/components/dashboard/OverviewCard";
import { SearchConsoleWidget } from "@/components/dashboard/SearchConsoleWidget";
import { AnalyticsWidget } from "@/components/dashboard/AnalyticsWidget";
import { SiteHealthWidget } from "@/components/dashboard/SiteHealthWidget";
import { KeywordTable } from "@/components/dashboard/KeywordTable";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { ConnectApiCard } from "@/components/dashboard/ConnectApiCard";
import { 
  BarChart3, 
  Globe, 
  Search, 
  TrendingUp, 
  Users, 
  MousePointerClick
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Mock keyword data for the KeywordTable
  const keywordData = [
    { term: "seo analytics dashboard", position: 3, previousPosition: 5, volume: 1200, difficulty: "medium" as const },
    { term: "google analytics api", position: 2, previousPosition: 2, volume: 2500, difficulty: "hard" as const },
    { term: "search console integration", position: 4, previousPosition: 7, volume: 890, difficulty: "medium" as const },
    { term: "seo dashboard template", position: 1, previousPosition: 3, volume: 3200, difficulty: "easy" as const },
    { term: "website analytics platform", position: 8, previousPosition: 6, volume: 1600, difficulty: "hard" as const },
  ];
  
  // Mock connection status - would be replaced with real connection status
  const isGoogleSearchConsoleConnected = false;
  const isGoogleAnalyticsConnected = false;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">SEO Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your website's search performance and analytics in one place.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            title="Organic Traffic"
            value="12,549"
            trend={{ value: 12.5, isPositive: true }}
            description="vs previous 30 days"
            icon={Users}
            iconColor="text-seo-blue"
            loading={!isGoogleAnalyticsConnected}
          />
          <OverviewCard
            title="Click-through Rate"
            value="4.3%"
            trend={{ value: 0.8, isPositive: true }}
            description="vs previous 30 days"
            icon={MousePointerClick}
            iconColor="text-seo-green"
            loading={!isGoogleSearchConsoleConnected}
          />
          <OverviewCard
            title="Avg. Position"
            value="8.2"
            trend={{ value: 1.5, isPositive: false }}
            description="vs previous 30 days"
            icon={TrendingUp}
            iconColor="text-seo-yellow"
            loading={!isGoogleSearchConsoleConnected}
          />
          <OverviewCard
            title="Indexed Pages"
            value="427"
            trend={{ value: 5.2, isPositive: true }}
            description="vs previous 30 days"
            icon={Globe}
            iconColor="text-seo-red"
            loading={!isGoogleSearchConsoleConnected}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="connections">API Connections</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <PerformanceChart />
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
              <SearchConsoleWidget />
              <SiteHealthWidget />
            </div>
            <AnalyticsWidget />
          </TabsContent>

          <TabsContent value="keywords" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-2">Keyword Rankings</h2>
                <p className="text-muted-foreground">
                  Track your website's performance for target keywords.
                </p>
              </div>
              <KeywordTable keywords={keywordData} />
            </div>
          </TabsContent>

          <TabsContent value="connections" className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">API Connections</h2>
              <p className="text-muted-foreground">
                Connect to Google APIs to get real-time data for your dashboard.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ConnectApiCard
                title="Google Search Console"
                description="Connect to track keywords, clicks, impressions, and more."
                icon={<Search className="h-5 w-5 text-seo-blue" />}
                connected={isGoogleSearchConsoleConnected}
                onConnect={() => console.log("Connect to Google Search Console")}
              />
              <ConnectApiCard
                title="Google Analytics"
                description="Connect to track traffic, user behavior, and conversions."
                icon={<BarChart3 className="h-5 w-5 text-seo-green" />}
                connected={isGoogleAnalyticsConnected}
                onConnect={() => console.log("Connect to Google Analytics")}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Index;
