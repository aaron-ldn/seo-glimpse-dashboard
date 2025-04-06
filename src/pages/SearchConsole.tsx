
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SearchConsoleWidget } from "@/components/dashboard/SearchConsoleWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Search, TrendingUp, Calendar } from "lucide-react";
import { DateRangePicker } from "@/components/dashboard/DateRangePicker";

const SearchConsole = () => {
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
            <h1 className="text-3xl font-bold tracking-tight mb-2">Search Console</h1>
            <p className="text-muted-foreground">
              Monitor your website's search performance and visibility in Google Search.
            </p>
          </div>
          <DateRangePicker
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>

        <Tabs defaultValue="performance" className="space-y-4">
          <TabsList>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <SearchConsoleWidget />

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-seo-blue" />
                    <CardTitle>Top Queries</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">Last 28 days</Badge>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Query</th>
                        <th className="text-right py-3 px-4 font-medium">Clicks</th>
                        <th className="text-right py-3 px-4 font-medium">Impressions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { query: "london hosting", clicks: 320, impressions: 4500 },
                        { query: "web hosting uk", clicks: 280, impressions: 3800 },
                        { query: "london web hosting", clicks: 215, impressions: 2900 },
                        { query: "london server hosting", clicks: 190, impressions: 2600 },
                        { query: "uk dedicated server", clicks: 145, impressions: 2100 },
                      ].map((item) => (
                        <tr key={item.query} className="border-b">
                          <td className="py-2 px-4">{item.query}</td>
                          <td className="py-2 px-4 text-right">{item.clicks.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right">{item.impressions.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-seo-green" />
                    <CardTitle>Top Pages</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">Last 28 days</Badge>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Page</th>
                        <th className="text-right py-3 px-4 font-medium">Clicks</th>
                        <th className="text-right py-3 px-4 font-medium">Impressions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { page: "/", clicks: 620, impressions: 8500 },
                        { page: "/hosting", clicks: 450, impressions: 6200 },
                        { page: "/dedicated-servers", clicks: 380, impressions: 4900 },
                        { page: "/cloud-hosting", clicks: 310, impressions: 4200 },
                        { page: "/contact", clicks: 180, impressions: 2800 },
                      ].map((item) => (
                        <tr key={item.page} className="border-b">
                          <td className="py-2 px-4">{item.page}</td>
                          <td className="py-2 px-4 text-right">{item.clicks.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right">{item.impressions.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="keywords" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Keyword performance data will appear here when connected to Google Search Console API.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Page Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Page performance data will appear here when connected to Google Search Console API.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Device Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Device performance data will appear here when connected to Google Search Console API.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SearchConsole;
