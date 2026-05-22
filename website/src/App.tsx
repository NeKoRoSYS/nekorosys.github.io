import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Background from './components/Background';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
import SmoothScroller from './components/SmoothScroller';
import { PageLoader } from './components/Loaders';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function LocationAwareRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} 
        />
        <Route 
          path="/home" 
          element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} 
        />
        <Route 
          path="/about" 
          element={<Suspense fallback={<PageLoader />}><About /></Suspense>} 
        />
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
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-6 mt-32">
          <LocationAwareRoutes />
        </div>

        <FooterBar />
      </div>
    </Router>
  );
}