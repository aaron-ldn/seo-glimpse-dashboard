
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface OverviewCardProps {
  title: string;
  value: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
  icon: LucideIcon;
  iconColor?: string;
  loading?: boolean;
}

export function OverviewCard({
  title,
  value,
  trend,
  description,
  icon: Icon,
  iconColor = "text-primary",
  loading = false,
}: OverviewCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className={cn(iconColor, "p-2 rounded-md bg-primary/10")}>
            <Icon className="h-5 w-5" />
          </div>
          {trend && (
            <div className={cn(
              "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
              trend.isPositive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            )}>
              <span>{trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {loading ? (
            <div className="h-8 w-24 bg-muted rounded mt-1 animate-pulse-gentle"></div>
          ) : (
            <h2 className="text-2xl font-bold tracking-tight">{value}</h2>
          )}
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
