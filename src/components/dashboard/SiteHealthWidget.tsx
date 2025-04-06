
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Globe, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type HealthStatus = "healthy" | "warning" | "critical" | "unknown";

interface HealthItem {
  name: string;
  status: HealthStatus;
  message: string;
}

interface SiteHealthProps {
  score: number;
  items: HealthItem[];
}

const getStatusIcon = (status: HealthStatus) => {
  switch (status) {
    case "healthy":
      return <CheckCircle2 className="h-5 w-5 text-seo-green" />;
    case "warning":
      return <AlertCircle className="h-5 w-5 text-seo-yellow" />;
    case "critical":
      return <XCircle className="h-5 w-5 text-seo-red" />;
    default:
      return <Globe className="h-5 w-5 text-muted-foreground" />;
  }
};

const getStatusColor = (status: HealthStatus) => {
  switch (status) {
    case "healthy":
      return "text-seo-green";
    case "warning":
      return "text-seo-yellow";
    case "critical":
      return "text-seo-red";
    default:
      return "text-muted-foreground";
  }
};

const getScoreColor = (score: number) => {
  if (score >= 90) return "bg-seo-green";
  if (score >= 70) return "bg-seo-yellow";
  return "bg-seo-red";
};

export function SiteHealthWidget() {
  // Mock data - would be replaced with real API data
  const healthData: SiteHealthProps = {
    score: 86,
    items: [
      {
        name: "Mobile Usability",
        status: "healthy",
        message: "No issues detected",
      },
      {
        name: "Page Speed",
        status: "warning",
        message: "Could be improved",
      },
      {
        name: "HTTPS",
        status: "healthy",
        message: "Secure connection",
      },
      {
        name: "Broken Links",
        status: "healthy",
        message: "All links are working",
      },
      {
        name: "Core Web Vitals",
        status: "warning",
        message: "LCP needs improvement",
      },
    ]
  };

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-seo-blue" />
          <CardTitle>Site Health</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Health Score:</span>
          <span className="text-lg font-bold">{healthData.score}/100</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Progress value={healthData.score} className={cn("h-2", getScoreColor(healthData.score))} />
        </div>
        <div className="space-y-4">
          {healthData.items.map((item) => (
            <div key={item.name} className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                {getStatusIcon(item.status)}
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className={cn("text-sm", getStatusColor(item.status))}>{item.message}</p>
                </div>
              </div>
              <div className={cn(
                "px-2 py-1 rounded text-xs font-medium",
                item.status === "healthy" ? "bg-green-50 text-green-700" :
                item.status === "warning" ? "bg-yellow-50 text-yellow-700" :
                item.status === "critical" ? "bg-red-50 text-red-700" : 
                "bg-gray-50 text-gray-700"
              )}>
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
