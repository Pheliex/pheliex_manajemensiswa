import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex min-h-screen w-full flex-col bg-background text-foreground">
          <div className="border-b p-2">
            <SidebarTrigger />
          </div>
          <div className="flex-1 p-4">{children}</div>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
