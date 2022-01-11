import Transitions from '../../components/transitions/Transitions';
import Footer from '../../components/footer/Footer';
import Hero from './sections/Hero';

const Home = () => {
  return (
    <main>
      <Hero />

      <Footer />

      {/* Page Transitions */}
      <Transitions />
    </main>
  );
};

export default Home;
