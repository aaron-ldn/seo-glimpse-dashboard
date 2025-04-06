
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Settings2, Bell, Lock, Globe, Eye, Database, Plug } from "lucide-react";
import { ConnectApiCard } from "@/components/dashboard/ConnectApiCard";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [googleAnalyticsConnected, setGoogleAnalyticsConnected] = useState(false);
  const [searchConsoleConnected, setSearchConsoleConnected] = useState(false);

  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };

  const handleConnectGoogleAnalytics = () => {
    // In a real implementation, this would open Google OAuth flow
    window.open("https://analytics.google.com/analytics/web/", "_blank");
    
    // For demo purposes, we'll just toggle the connected state
    setTimeout(() => {
      setGoogleAnalyticsConnected(true);
      toast.success("Google Analytics connected successfully!");
    }, 1000);
  };

  const handleConnectSearchConsole = () => {
    // In a real implementation, this would open Google OAuth flow
    window.open("https://search.google.com/search-console", "_blank");
    
    // For demo purposes, we'll just toggle the connected state
    setTimeout(() => {
      setSearchConsoleConnected(true);
      toast.success("Google Search Console connected successfully!");
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="general">
              <Settings2 className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="api">
              <Plug className="h-4 w-4 mr-2" />
              API Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure your dashboard appearance and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="darkMode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable dark mode for the dashboard
                      </p>
                    </div>
                    <Switch
                      id="darkMode"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Privacy</h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dataSharing">Data Collection</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow anonymous usage statistics to improve our service
                        </p>
                      </div>
                      <Switch
                        id="dataSharing"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Configure when and how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications about important changes
                      </p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weeklyReports">Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly SEO performance reports
                      </p>
                    </div>
                    <Switch
                      id="weeklyReports"
                      checked={weeklyReports}
                      onCheckedChange={setWeeklyReports}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>
                  Manage your API keys for direct API access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="googleApiKey">Google API Key</Label>
                  <div className="flex gap-2">
                    <Input
                      id="googleApiKey"
                      type="password"
                      placeholder="Enter your API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    <Button onClick={() => {
                      toast.success("API key saved");
                    }}>Save</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Used for direct access to Google APIs (optional)
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <h3 className="text-lg font-medium mb-4">Connect Services</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ConnectApiCard
                title="Google Analytics"
                description="Connect to view analytics data directly in your dashboard"
                icon={<Database className="h-5 w-5 text-primary" />}
                connected={googleAnalyticsConnected}
                onConnect={handleConnectGoogleAnalytics}
              />
              
              <ConnectApiCard
                title="Google Search Console"
                description="Connect to monitor and optimize your site performance"
                icon={<Eye className="h-5 w-5 text-primary" />}
                connected={searchConsoleConnected}
                onConnect={handleConnectSearchConsole}
              />
            </div>
            
            <div className="flex justify-end mt-6">
              <Button onClick={handleSaveSettings}>
                Save All Settings
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
