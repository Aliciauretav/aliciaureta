import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GovernancePage } from "./pages/GovernancePage";
import { WebAppDesignPage } from "./pages/WebAppDesignPage";
import { WebDesignPage } from "./pages/WebDesignPage";
import { AppDesignPage } from "./pages/AppDesignPage";
import { AudixPage } from "./pages/AudixPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/proyectos/governance" element={<ErrorBoundary><GovernancePage /></ErrorBoundary>} />
        <Route path="/proyectos/web-app-design" element={<ErrorBoundary><WebAppDesignPage /></ErrorBoundary>} />
        <Route path="/proyectos/web-design" element={<ErrorBoundary><WebDesignPage /></ErrorBoundary>} />
        <Route path="/proyectos/app-design" element={<ErrorBoundary><AppDesignPage /></ErrorBoundary>} />
        <Route path="/proyectos/audix" element={<ErrorBoundary><AudixPage /></ErrorBoundary>} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}