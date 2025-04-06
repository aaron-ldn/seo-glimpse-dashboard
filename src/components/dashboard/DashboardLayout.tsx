
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  Globe, 
  Home, 
  LineChart, 
  Search, 
  Settings, 
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-4 md:p-6">
          <div className="container px-4 md:px-6 max-w-7xl">
            <SidebarTrigger className="mb-4 md:mb-6" />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

function DashboardSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      url: "/",
    },
    {
      title: "Search Console",
      icon: Search,
      url: "/search-console",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      url: "/analytics",
    },
    {
      title: "Performance",
      icon: TrendingUp,
      url: "/performance",
    },
    {
      title: "Domain Analysis",
      icon: Globe,
      url: "/domain-analysis",
    },
    {
      title: "Settings",
      icon: Settings,
      url: "/settings",
    },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="px-6 py-5">
        <div className="flex items-center gap-2 font-semibold text-xl text-white">
          <LineChart className="h-6 w-6 text-seo-green" />
          <span>SEO Glimpse</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title} className="px-3">
                <SidebarMenuButton asChild className="px-3">
                  <Link 
                    to={item.url}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground transition-colors",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      currentPath === item.url && "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-sidebar-foreground/60 text-sm text-center">
          <p>SEO Glimpse Dashboard</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
