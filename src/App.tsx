import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { GovernancePage } from "./pages/GovernancePage";
import { WebAppDesignPage } from "./pages/WebAppDesignPage";
import { WebDesignPage } from "./pages/WebDesignPage";
import { AppDesignPage } from "./pages/AppDesignPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/proyectos/governance" element={<GovernancePage />} />
        <Route path="/proyectos/web-app-design" element={<WebAppDesignPage />} />
        <Route path="/proyectos/web-design" element={<WebDesignPage />} />
        <Route path="/proyectos/app-design" element={<AppDesignPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}