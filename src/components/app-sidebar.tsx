import {
  Home,
  Users,
  School,
  ShieldAlert,
  Search,
  Mail,
  Settings,
  GalleryVerticalEnd,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const items = [
  { title: "Search", url: "#", icon: Search },
  { title: "Dashboard", url: "#", icon: Home },
  { title: "Data Siswa", url: "#", icon: Users },
  { title: "Data Kelas", url: "#", icon: School },
  { title: "Pelanggaran", url: "#", icon: ShieldAlert },
  { title: "Email", url: "#", icon: Mail },
  { title: "Setting", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      {/* Bagian Header Sidebar */}
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold tracking-tight text-sm">
              TELSA DATA
            </span>
            <span className="text-xs text-muted-foreground">
              Manajemen Siswa
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* Bagian Konten/Menu Sidebar */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-2">Navigasi Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="hover:bg-muted font-medium transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
