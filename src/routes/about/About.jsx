import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/Header';
import Transitions from '../../components/transitions/Transitions';
import Footer from '../../components/footer/Footer';
import Content from './sections/Content';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Agencia Moderne | Sobre-Moderne</title>
        <meta name='description' content='Informacion sobre la Agencia Moderne' />
      </Helmet>

      <Header />

      <main>
        <Content />
      </main>

      <Footer spacing='spacing-top footer-spacing-bottom' />

      {/* Page Transitions */}
      <Transitions />
    </>
  );
};

export default About;
