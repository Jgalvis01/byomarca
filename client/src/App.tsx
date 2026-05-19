import MainLayout from './layout/MainLayout';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import LebrauSection from './sections/LebrauSection';
import ProductCatalog from './sections/ProductCatalog';
import BenefitsSection from './sections/BenefitsSection';
import WaitingRoomSection from './sections/WaitingRoomSection';
import ContactSection from './sections/ContactSection';
import DashboardPreview from './sections/DashboardPreview';

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <LebrauSection />
      <ProductCatalog />
      <BenefitsSection />
      {/* <WaitingRoomSection /> */}
      {/* <DashboardPreview /> */}
      <ContactSection />
    </MainLayout>
  );
}

export default App;