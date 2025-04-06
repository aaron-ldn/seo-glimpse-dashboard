
import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Globe, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

interface SeoIssue {
  type: string;
  severity: "high" | "medium" | "low";
  description: string;
  recommendation: string;
}

const DomainAnalysis = () => {
  const [domain, setDomain] = useState("london-hosting.com");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  
  // Mock data that would come from a real analysis
  const seoIssues: SeoIssue[] = [
    {
      type: "Meta Descriptions",
      severity: "high",
      description: "15 pages are missing meta descriptions",
      recommendation: "Add unique, descriptive meta descriptions to improve CTR in search results"
    },
    {
      type: "Page Speed",
      severity: "high",
      description: "Homepage loads in 5.2 seconds on mobile (slow)",
      recommendation: "Optimize images and implement lazy loading to improve page load speed"
    },
    {
      type: "Mobile Optimization",
      severity: "medium",
      description: "Content is wider than screen on several pages",
      recommendation: "Ensure all pages are fully responsive with proper viewport settings"
    },
    {
      type: "Structured Data",
      severity: "medium",
      description: "Missing structured data for main services",
      recommendation: "Implement schema markup for hosting services and business information"
    },
    {
      type: "Internal Linking",
      severity: "low",
      description: "Sub-optimal internal linking structure",
      recommendation: "Improve internal linking to key service pages from blog content"
    }
  ];

  const contentOpportunities = [
    "Create in-depth hosting comparison guides targeting keywords like 'best uk hosting providers'",
    "Add case studies with London businesses to target local hosting searches",
    "Develop content around hosting security and compliance for UK businesses",
    "Create an ultimate guide to scaling hosting solutions for growing businesses",
    "Add technical tutorials that address common hosting challenges"
  ];

  const keywordGaps = [
    { keyword: "managed wordpress hosting london", difficulty: "medium", volume: 480 },
    { keyword: "dedicated hosting uk business", difficulty: "medium", volume: 320 },
    { keyword: "gdpr compliant web hosting", difficulty: "low", volume: 290 },
    { keyword: "fastest uk hosting provider", difficulty: "high", volume: 650 },
    { keyword: "eco friendly hosting uk", difficulty: "low", volume: 210 }
  ];

  const analyzeDomain = () => {
    if (!domain) {
      toast.error("Please enter a domain name");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
      toast.success(`Analysis completed for ${domain}`);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-600";
      case "medium": return "text-amber-600";
      case "low": return "text-green-600";
      default: return "text-slate-600";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Domain Analysis</h1>
          <p className="text-muted-foreground">
            Analyze any domain to identify SEO issues and opportunities for improvement.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Enter domain name"
                  className="pl-9"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
              <Button 
                onClick={analyzeDomain} 
                disabled={isAnalyzing || !domain}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Domain"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {hasAnalyzed && (
          <Tabs defaultValue="issues" className="space-y-4">
            <TabsList>
              <TabsTrigger value="issues">SEO Issues</TabsTrigger>
              <TabsTrigger value="opportunities">Content Opportunities</TabsTrigger>
              <TabsTrigger value="keywords">Keyword Gaps</TabsTrigger>
            </TabsList>

            <TabsContent value="issues" className="space-y-4">
              <div className="grid gap-4">
                {seoIssues.map((issue, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${getSeverityColor(issue.severity)}`}>
                            {issue.severity === "high" ? (
                              <XCircle className="h-5 w-5 inline mr-1" />
                            ) : issue.severity === "medium" ? (
                              <XCircle className="h-5 w-5 inline mr-1" />
                            ) : (
                              <CheckCircle2 className="h-5 w-5 inline mr-1" />
                            )}
                            {issue.type}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          issue.severity === "high" 
                            ? "bg-red-100 text-red-800" 
                            : issue.severity === "medium"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-green-100 text-green-800"
                        }`}>
                          {issue.severity.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      <CardDescription className="mt-1">{issue.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm">
                        <strong>Recommendation:</strong> {issue.recommendation}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Content Opportunities</CardTitle>
                  <CardDescription>
                    Based on your domain analysis, here are content opportunities to improve rankings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {contentOpportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="keywords" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Gaps</CardTitle>
                  <CardDescription>
                    Keywords that your competitors are ranking for but you are not.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Keyword</th>
                          <th className="text-right py-3 px-4 font-medium">Difficulty</th>
                          <th className="text-right py-3 px-4 font-medium">Monthly Volume</th>
                        </tr>
                      </thead>
                      <tbody>
                        {keywordGaps.map((keyword, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2 px-4">{keyword.keyword}</td>
                            <td className="py-2 px-4 text-right">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                keyword.difficulty === "high" 
                                  ? "bg-red-100 text-red-800" 
                                  : keyword.difficulty === "medium"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-green-100 text-green-800"
                              }`}>
                                {keyword.difficulty}
                              </span>
                            </td>
                            <td className="py-2 px-4 text-right">{keyword.volume}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DomainAnalysis;
