import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NewsPage from "./pages/news";
import NewsDetailPage from "./pages/news-detail";
import TrusteesPage from "./pages/trustees";
import ContactPage from "./pages/contact";
import DonatePage from "./pages/donate";
import ActivitiesPage from "@/pages/activities";
import AboutVedas from "./pages/vedas/About";
import VedaRakshanam from "./pages/vedas/Rakshanam";
import VedaVyasa from "./pages/vedas/Vyasa";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news/:id" component={NewsDetailPage} />
      <Route path="/trustees" component={TrusteesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/donate" component={DonatePage} />
      <Route path="/activities" component={ActivitiesPage} />
      <Route path="/vedas/about" component={AboutVedas} />
      <Route path="/vedas/rakshanam" component={VedaRakshanam} />
      <Route path="/vedas/vyasa" component={VedaVyasa} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
