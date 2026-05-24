import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Background, { BackgroundAscii } from './components/Backgrounds';
import { HeaderBar, FooterBar } from './components/Bars';
import { SmoothScroller } from './shared/Effects';
import { PageLoader } from './components/Loaders';
import ScrollIndicator from './components/ScrollIndicator';
import { CheckIfRouteActive } from './shared/Utils';

const NotFound = lazy(() => import('./pages/404'));
const BadApple = lazy(() => import('./pages/Bad-Apple'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Home = lazy(() => import('./pages/Home'));

function LocationAwareRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><Portfolio /></Suspense>} />
        <Route path="/bad-apple" element={<Suspense fallback={<PageLoader />}><BadApple /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <SmoothScroller/>
      
      <div className="relative flex flex-col min-h-screen items-center justify-start bg-black text-gray-100 overflow-x-hidden scrollbar-none selection:bg-purple-300/30">
        {CheckIfRouteActive('/bad-apple') ? <BackgroundAscii /> : <Background/>}
        <HeaderBar/>
        <ScrollIndicator/>
        
        <div className="relative z-10 flex flex-col items-center w-full md:max-w-8xl mx-auto px-6">
          <LocationAwareRoutes />
        </div>

        {!CheckIfRouteActive('/bad-apple') ? <FooterBar /> : undefined}
      </div>
    </>
  );
}