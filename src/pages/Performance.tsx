
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { OverviewCard } from "@/components/dashboard/OverviewCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, LineChart, MousePointerClick, Globe } from "lucide-react";
import { DateRangePicker } from "@/components/dashboard/DateRangePicker";

const Performance = () => {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Performance</h1>
            <p className="text-muted-foreground">
              Track SEO performance metrics and rankings over time.
            </p>
          </div>
          <DateRangePicker
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            title="Avg. Position"
            value="8.2"
            trend={{ value: 1.5, isPositive: true }}
            description="vs previous period"
            icon={TrendingUp}
            iconColor="text-seo-blue"
          />
          <OverviewCard
            title="Click-through Rate"
            value="4.7%"
            trend={{ value: 0.8, isPositive: true }}
            description="vs previous period"
            icon={MousePointerClick}
            iconColor="text-seo-green"
          />
          <OverviewCard
            title="Clicks"
            value="12,845"
            trend={{ value: 15.3, isPositive: true }}
            description="vs previous period"
            icon={LineChart}
            iconColor="text-seo-yellow"
          />
          <OverviewCard
            title="Impressions"
            value="273,452"
            trend={{ value: 8.7, isPositive: true }}
            description="vs previous period"
            icon={Globe}
            iconColor="text-seo-red"
          />
        </div>

        <Tabs defaultValue="traffic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="rankings">Rankings</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-4">
            <PerformanceChart />
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-seo-blue" />
                    <CardTitle>Top Improving Keywords</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Keyword</th>
                        <th className="text-right py-3 px-4 font-medium">Position</th>
                        <th className="text-right py-3 px-4 font-medium">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { keyword: "london hosting", position: 3, change: 5 },
                        { keyword: "dedicated servers uk", position: 5, change: 4 },
                        { keyword: "cheap uk hosting", position: 7, change: 3 },
                        { keyword: "uk web hosting services", position: 8, change: 3 },
                        { keyword: "business hosting london", position: 10, change: 2 },
                      ].map((item) => (
                        <tr key={item.keyword} className="border-b">
                          <td className="py-2 px-4">{item.keyword}</td>
                          <td className="py-2 px-4 text-right">{item.position}</td>
                          <td className="py-2 px-4 text-right text-green-600">+{item.change}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-seo-red" />
                    <CardTitle>Top Declining Keywords</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Keyword</th>
                        <th className="text-right py-3 px-4 font-medium">Position</th>
                        <th className="text-right py-3 px-4 font-medium">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { keyword: "wordpress hosting uk", position: 12, change: -4 },
                        { keyword: "managed hosting services", position: 15, change: -3 },
                        { keyword: "best vps hosting uk", position: 18, change: -3 },
                        { keyword: "uk hosting provider", position: 14, change: -2 },
                        { keyword: "hosting solutions london", position: 22, change: -2 },
                      ].map((item) => (
                        <tr key={item.keyword} className="border-b">
                          <td className="py-2 px-4">{item.keyword}</td>
                          <td className="py-2 px-4 text-right">{item.position}</td>
                          <td className="py-2 px-4 text-right text-red-600">{item.change}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rankings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed keyword ranking data will appear here when connected to ranking tracking API.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Competitor performance data will appear here when connected to competitor analysis API.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Performance;
