import { Helmet } from 'react-helmet-async';
import Hero from './sections/Hero';
import Content from './sections/Content';
import Layout from '../../components/layout/Layout';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Agencia Moderne | Home</title>
        <meta name='description' content='Pagina de Inicio - Agencia Moderne' />
      </Helmet>

      <Layout headerIsLight>
        <main>
          <Hero />

          <Content />
        </main>
      </Layout>
    </>
  );
};

export default Home;
