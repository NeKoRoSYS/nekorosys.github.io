import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Background from './components/Background';
import { HeaderBar, FooterBar } from './components/Bars';
import { SmoothScroller } from './shared/Effects';
import { PageLoader } from './components/Loaders';

const Portfolio = lazy(() => import('./pages/Portfolio'));
const Home = lazy(() => import('./pages/Home'));

function LocationAwareRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="/home" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><Portfolio /></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroller />
      
      <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-white overflow-x-hidden scrollbar-none selection:bg-purple-300/30">
        <Background />
        
        <HeaderBar/>
        
        <div className="relative z-10 flex flex-col items-center w-full md:max-w-8x1 mx-auto px-6">
          <LocationAwareRoutes />
        </div>

        <FooterBar />
      </div>
    </Router>
  );
}