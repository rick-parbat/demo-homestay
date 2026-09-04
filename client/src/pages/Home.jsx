import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HostWelcome from '../components/HostWelcome';
import RoomsSection from '../components/RoomsSection';
import HighlightsSection from '../components/HighlightsSection';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import GuestVoices from '../components/GuestVoices';
import LocationMap from '../components/LocationMap';
import Offers from '../components/Offers';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HostWelcome />
        <RoomsSection />
        <HighlightsSection />
        <Amenities />
        <Gallery />
        <GuestVoices />
        <LocationMap />
        <Offers />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
