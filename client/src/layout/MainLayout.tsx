import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const hideFooter = location.pathname === '/' || location.pathname === '/nosotros';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <BackgroundAnimation />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;