
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Shield, AlertCircle } from "lucide-react";

interface ConnectApiCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  connected?: boolean;
  onConnect?: () => void;
}

export function ConnectApiCard({
  title,
  description,
  icon,
  connected = false,
  onConnect,
}: ConnectApiCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
          {connected ? (
            <div className="flex items-center gap-1 text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">
              <Shield className="h-3 w-3" />
              <span>Connected</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-xs px-2 py-1 bg-yellow-50 text-yellow-700 rounded-full">
              <AlertCircle className="h-3 w-3" />
              <span>Not Connected</span>
            </div>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        {!connected && (
          <div className="text-xs text-muted-foreground">
            <p>Connect to access:</p>
            <ul className="list-disc list-inside mt-1">
              <li>Real-time keyword rankings</li>
              <li>Traffic analytics data</li>
              <li>Performance metrics</li>
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <Button
          variant={connected ? "outline" : "default"}
          onClick={onConnect}
          className="w-full"
        >
          {connected ? "Manage Connection" : "Connect API"}
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
