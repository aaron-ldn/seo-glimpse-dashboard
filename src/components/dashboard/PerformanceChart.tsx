
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

interface PerformanceData {
  date: string;
  organic: number;
  paid: number;
  direct: number;
}

export function PerformanceChart() {
  // Mock data - would be replaced with real API data
  const data: PerformanceData[] = [
    { date: "Jan 1", organic: 4000, paid: 2400, direct: 1600 },
    { date: "Jan 8", organic: 3500, paid: 2200, direct: 1800 },
    { date: "Jan 15", organic: 4800, paid: 2600, direct: 2000 },
    { date: "Jan 22", organic: 5200, paid: 2800, direct: 2200 },
    { date: "Jan 29", organic: 4900, paid: 2700, direct: 2100 },
    { date: "Feb 5", organic: 6000, paid: 3000, direct: 2400 },
    { date: "Feb 12", organic: 6500, paid: 3200, direct: 2600 },
  ];

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-seo-blue" />
          <CardTitle>Traffic Performance</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "4px",
                  padding: "8px",
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
              <Line
                type="monotone"
                dataKey="organic"
                name="Organic Traffic"
                stroke="#1a73e8"
                activeDot={{ r: 6 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="paid"
                name="Paid Traffic"
                stroke="#34a853"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="direct"
                name="Direct Traffic"
                stroke="#fbbc05"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
