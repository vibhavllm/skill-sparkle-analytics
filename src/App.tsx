import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import SkillBeacon from "./pages/SkillBeacon";
import Badges from "./pages/Badges";
import Leaderboard from "./pages/Leaderboard";
import Communities from "./pages/Communities";
import TopicMastery from "./pages/TopicMastery";
import Exams from "./pages/Exams";
import AIPlanner from "./pages/AIPlanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/skillbeacon" element={<SkillBeacon />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/mastery" element={<TopicMastery />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/planner" element={<AIPlanner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
