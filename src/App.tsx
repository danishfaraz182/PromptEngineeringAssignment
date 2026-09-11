import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { PageLoader } from './components/layout/PageLoader';
import { ToastProvider } from './components/ui/Toast';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { SchoolDetailPage } from './pages/SchoolDetailPage';
import { GlobalNetworkPage } from './pages/GlobalNetworkPage';
import { ResearchPage } from './pages/ResearchPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ScholarshipsPage } from './pages/ScholarshipsPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { AlumniPage } from './pages/AlumniPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPage, TermsPage, AccessibilityPage } from './pages/LegalPages';

function App() {
  return (
    <ToastProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to main content
      </a>
      <PageLoader />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/academics/:slug" element={<SchoolDetailPage />} />
          <Route path="/global-network" element={<GlobalNetworkPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/student-life" element={<StudentLifePage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </ToastProvider>
  );
}

export default App;
