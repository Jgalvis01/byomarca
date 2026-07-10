import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import LebrauPage from './pages/LebrauPage';
import ContactoPage from './pages/ContactoPage';
import OtrasMarcasPage from './pages/OtrasMarcasPage';
import NosotrosPage from './pages/NosotrosPage';
import PageLoader from './components/PageLoader';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setDisplayLocation(location);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location, displayLocation.pathname]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <MainLayout>
        <AnimatePresence mode="wait">
          <Routes location={displayLocation} key={displayLocation.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/lebrau" element={<LebrauPage />} />
            <Route path="/productos" element={<LebrauPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/otras-marcas" element={<OtrasMarcasPage />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </>
  );
}

export default App;