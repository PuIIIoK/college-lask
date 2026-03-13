import HeroBanner from './components/HeroBanner';
import QuickLinks from './components/QuickLinks';
import AboutSection from './components/AboutSection';
import NewsBlock from './components/NewsBlock';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <QuickLinks />
      <AboutSection />
      <NewsBlock />
    </>
  );
}
