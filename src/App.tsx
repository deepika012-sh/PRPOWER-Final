// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import ProjectsPage from "./components/ProjectsPage";
import NotFound from "./pages/NotFound";

// Layout Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* IMPORTANT: BrowserRouter MUST wrap all components using react-router hooks */}
        <BrowserRouter>
          
          {/* Navbar MUST be inside BrowserRouter */}
          <Navbar />

          {/* Application Routes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Footer also must be inside BrowserRouter */}
          <Footer />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
