
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Settings2, Bell, Lock, Globe, Eye, Database } from "lucide-react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [apiKey, setApiKey] = useState("");

  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
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
              <Globe className="h-4 w-4 mr-2" />
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
            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
                <CardDescription>
                  Manage API keys and external service connections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="googleApiKey">Google Search Console API Key</Label>
                    <div className="flex gap-2">
                      <Textarea 
                        id="googleApiKey" 
                        placeholder="Enter your API key" 
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enter your Google Search Console API key to connect your account
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Connected Services</Label>
                        <div className="text-sm text-muted-foreground">
                          Manage external service connections
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <Database className="h-5 w-5 text-primary" />
                          <span>Google Analytics</span>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <Eye className="h-5 w-5 text-primary" />
                          <span>Google Search Console</span>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveSettings}>
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
