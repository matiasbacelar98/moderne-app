import { Helmet } from 'react-helmet-async';
import Content from './sections/Content';
import Layout from '../../components/layout/Layout';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Agencia Moderne | Sobre-Moderne</title>
        <meta name='description' content='Informacion sobre la Agencia Moderne' />
      </Helmet>

      <Layout isHeaderLight={false}>
        <main>
          <Content />
        </main>
      </Layout>
    </>
  );
};

export default About;
