import { Helmet } from 'react-helmet-async';
import Hero from './sections/Hero';
import Content from './sections/Content';
import Transitions from '../../components/transitions/Transitions';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Agencia Moderne | Home</title>
        <meta name='description' content='Pagina de Inicio - Agencia Moderne' />
      </Helmet>

      <main>
        <Hero />

        <Content />

        <Footer spacing='spacing-top footer-spacing-bottom' />

        {/* Page Transitions */}
        <Transitions />
      </main>
    </>
  );
};

export default Home;
