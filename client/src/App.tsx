import { Suspense, lazy, useCallback, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";

// Route-level code splitting: each page is fetched only when visited.
const Home = lazy(() => import("./pages/home"));
const Mission = lazy(() => import("./components/sections/Mission"));
const InitiativesPage = lazy(() => import("./pages/initiatives"));
const Activities = lazy(() => import("./components/sections/Activities"));
const VedasPage = lazy(() => import("./components/sections/Vedas"));
const MahaPeriyavasMessage = lazy(() => import("./pages/MahaPeriyavasMessage"));
const Pariksha = lazy(() => import("./components/sections/Pariksha"));
const GalleryPage = lazy(() => import("./components/sections/Gallery"));
const History = lazy(() => import("./components/sections/History"));
const Trustees = lazy(() => import("./components/sections/Trustees"));
const DonatePage = lazy(() => import("./components/sections/Donate"));
const ContactPage = lazy(() => import("./components/sections/Contact"));
const Mahotsav = lazy(() => import("./components/sections/Mahotsav"));
const ParikshaResultPage = lazy(() => import("./components/sections/ParikshaResult"));
const AnnouncementsPage = lazy(() => import("./pages/AnnouncementsPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NotFound = lazy(() => import("./pages/not-found"));

/** Scrolls to the top of the page on every route change (but not on hash navigation). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// Section components under components/sections/ predate this layout rewrite and
// still accept isMenuOpen/isDrawerOpen props that controlled font scaling against
// the old fixed sidebar + announcement drawer. That chrome no longer exists, so
// every route below is given the "both closed" (spacious) state those components
// were designed to use at full content width. These pages get their own focused
// pass to drop the legacy props entirely; tracked in PRODUCTION_READINESS.md.
const legacySpacious = { isMenuOpen: false, isDrawerOpen: false };

/** Legacy pseudo-navigation shim: several section components still call a
 * `setCurrentPage("somePage")` callback instead of using react-router-dom
 * directly (a holdover from before real routes existed for them). This maps
 * that call onto a real navigation. */
function useLegacyNavigate() {
  const navigate = useNavigate();
  return useCallback((page: string) => navigate(page === "home" ? "/" : `/${page}`), [navigate]);
}

export default function App() {
  const goTo = useLegacyNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SkipLink />
      <Header />
      <ScrollToTop />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission {...legacySpacious} />} />
            <Route path="/initiatives" element={<InitiativesPage {...legacySpacious} />} />
            <Route path="/activities" element={<Activities {...legacySpacious} />} />
            <Route path="/vedas" element={<VedasPage />} />
            <Route path="/vedas/maha-periyavas-message" element={<MahaPeriyavasMessage />} />
            <Route path="/pariksha" element={<Pariksha {...legacySpacious} />} />
            <Route path="/gallery" element={<GalleryPage {...legacySpacious} />} />
            <Route path="/history" element={<History {...legacySpacious} />} />
            <Route path="/trustees" element={<Trustees {...legacySpacious} />} />
            <Route path="/donate" element={<DonatePage {...legacySpacious} />} />
            <Route path="/contact" element={<ContactPage {...legacySpacious} />} />
            <Route path="/mahotsav" element={<Mahotsav {...legacySpacious} setCurrentPage={goTo} />} />
            <Route path="/pariksha-result" element={<ParikshaResultPage {...legacySpacious} setCurrentPage={goTo} />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/announcements/:id" element={<AnnouncementsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
