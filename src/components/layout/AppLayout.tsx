import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CommandMenu } from "@/components/CommandMenu";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-background via-background to-primary/5">
      <AppSidebar />
      <main className="flex-1 w-full">
        <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-lg">
          <div className="flex h-16 items-center gap-4 px-6">
            <SidebarTrigger className="hover:bg-primary/10" />
            <div className="flex-1" />
            <CommandMenu />
          </div>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
