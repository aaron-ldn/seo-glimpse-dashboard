
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BarChart3 } from "lucide-react";
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface AnalyticsData {
  date: string;
  users: number;
  pageviews: number;
}

export function AnalyticsWidget() {
  // Mock data - would be replaced with real API data
  const data: AnalyticsData[] = [
    { date: "Jan 1", users: 400, pageviews: 1200 },
    { date: "Jan 8", users: 500, pageviews: 1450 },
    { date: "Jan 15", users: 450, pageviews: 1300 },
    { date: "Jan 22", users: 700, pageviews: 2100 },
    { date: "Jan 29", users: 650, pageviews: 1950 },
    { date: "Feb 5", users: 800, pageviews: 2400 },
    { date: "Feb 12", users: 900, pageviews: 2700 },
  ];

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-seo-green" />
          <CardTitle>Analytics Overview</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  padding: '8px'
                }}
              />
              <Bar yAxisId="left" dataKey="users" fill="#1a73e8" name="Users" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="pageviews" fill="#34a853" name="Pageviews" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-seo-blue"></div>
            <span className="text-sm text-muted-foreground">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-seo-green"></div>
            <span className="text-sm text-muted-foreground">Pageviews</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
