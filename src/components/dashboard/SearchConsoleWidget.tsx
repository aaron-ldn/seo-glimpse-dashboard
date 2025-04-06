
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, CheckCircle2, XCircle } from "lucide-react";

interface KeywordData {
  keyword: string;
  position: number;
  clicks: number;
  impressions: number;
}

export function SearchConsoleWidget() {
  // Mock data - would be replaced with real API data
  const keywordData: KeywordData[] = [
    { keyword: "seo analytics dashboard", position: 3.2, clicks: 145, impressions: 2800 },
    { keyword: "google search console api", position: 5.7, clicks: 98, impressions: 1560 },
    { keyword: "seo performance tracking", position: 8.1, clicks: 76, impressions: 1250 },
    { keyword: "website ranking tool", position: 12.4, clicks: 42, impressions: 950 },
    { keyword: "search visibility metrics", position: 15.2, clicks: 28, impressions: 780 },
  ];

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <LineChart className="h-5 w-5 text-seo-blue" />
          <CardTitle>Search Console Performance</CardTitle>
        </div>
        <Badge variant="outline" className="text-xs">Last 28 days</Badge>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Keyword</th>
                <th className="text-right py-3 px-4 font-medium">Position</th>
                <th className="text-right py-3 px-4 font-medium">Clicks</th>
                <th className="text-right py-3 px-4 font-medium">Impressions</th>
                <th className="text-right py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {keywordData.map((item) => (
                <tr key={item.keyword} className="border-b">
                  <td className="py-2 px-4">{item.keyword}</td>
                  <td className="py-2 px-4 text-right">{item.position.toFixed(1)}</td>
                  <td className="py-2 px-4 text-right">{item.clicks.toLocaleString()}</td>
                  <td className="py-2 px-4 text-right">{item.impressions.toLocaleString()}</td>
                  <td className="py-2 px-4 text-right">
                    {item.position <= 10 ? (
                      <div className="flex justify-end items-center">
                        <CheckCircle2 className="h-4 w-4 text-seo-green" />
                      </div>
                    ) : (
                      <div className="flex justify-end items-center">
                        <XCircle className="h-4 w-4 text-seo-red" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
