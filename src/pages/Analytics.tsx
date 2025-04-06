
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AnalyticsWidget } from "@/components/dashboard/AnalyticsWidget";
import { OverviewCard } from "@/components/dashboard/OverviewCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Clock, 
  Users, 
  MousePointerClick, 
  ArrowDown
} from "lucide-react";
import { DateRangePicker } from "@/components/dashboard/DateRangePicker";

const Analytics = () => {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  const isGoogleAnalyticsConnected = false;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Analytics</h1>
            <p className="text-muted-foreground">
              Track user behavior, traffic sources, and engagement metrics.
            </p>
          </div>
          <DateRangePicker
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            title="Total Users"
            value="8,249"
            trend={{ value: 18.2, isPositive: true }}
            description="vs previous period"
            icon={Users}
            iconColor="text-seo-blue"
            loading={!isGoogleAnalyticsConnected}
          />
          <OverviewCard
            title="Pageviews"
            value="24,512"
            trend={{ value: 12.5, isPositive: true }}
            description="vs previous period"
            icon={MousePointerClick}
            iconColor="text-seo-green"
            loading={!isGoogleAnalyticsConnected}
          />
          <OverviewCard
            title="Avg. Session Duration"
            value="2m 15s"
            trend={{ value: 5.8, isPositive: false }}
            description="vs previous period"
            icon={Clock}
            iconColor="text-seo-yellow"
            loading={!isGoogleAnalyticsConnected}
          />
          <OverviewCard
            title="Bounce Rate"
            value="42.3%"
            trend={{ value: 3.1, isPositive: false }}
            description="vs previous period"
            icon={ArrowDown}
            iconColor="text-seo-red"
            loading={!isGoogleAnalyticsConnected}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="conversions">Conversions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <AnalyticsWidget />
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-seo-blue" />
                    <CardTitle>Traffic Sources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Source</th>
                        <th className="text-right py-3 px-4 font-medium">Users</th>
                        <th className="text-right py-3 px-4 font-medium">% of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { source: "Organic Search", users: 3850, percentage: 46.7 },
                        { source: "Direct", users: 2105, percentage: 25.5 },
                        { source: "Referral", users: 1240, percentage: 15.0 },
                        { source: "Social", users: 780, percentage: 9.5 },
                        { source: "Email", users: 274, percentage: 3.3 },
                      ].map((item) => (
                        <tr key={item.source} className="border-b">
                          <td className="py-2 px-4">{item.source}</td>
                          <td className="py-2 px-4 text-right">{item.users.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right">{item.percentage.toFixed(1)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-seo-green" />
                    <CardTitle>Top Pages</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Page</th>
                        <th className="text-right py-3 px-4 font-medium">Pageviews</th>
                        <th className="text-right py-3 px-4 font-medium">Avg. Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { page: "/", pageviews: 5240, avgTime: "1:45" },
                        { page: "/hosting", pageviews: 3820, avgTime: "2:12" },
                        { page: "/dedicated-servers", pageviews: 2750, avgTime: "3:05" },
                        { page: "/cloud-hosting", pageviews: 2340, avgTime: "2:38" },
                        { page: "/contact", pageviews: 1980, avgTime: "1:20" },
                      ].map((item) => (
                        <tr key={item.page} className="border-b">
                          <td className="py-2 px-4">{item.page}</td>
                          <td className="py-2 px-4 text-right">{item.pageviews.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right">{item.avgTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="acquisition" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Acquisition Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acquisition channel data will appear here when connected to Google Analytics API.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Behavior</CardTitle>
              </CardHeader>
              <CardContent>
                <p>User behavior data will appear here when connected to Google Analytics API.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Conversion data will appear here when connected to Google Analytics API.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
