import Head from '../../components/reusable/head/Head';
import Layout from '../../components/reusable/layout/Layout';
import Navigation from '../../components/reusable/navigation/Navigation';
import Content from '../../sections/about/Content';
import { homeBox, propertiesBox } from '../../utils/navigationData';

const About = () => {
  return (
    <>
      <Head title='Sobre-Moderne' description='Informacion sobre la Agencia Moderne' />

      <Layout isHeaderLight={false}>
        <main>
          <Content />

          <section>
            <Navigation boxOneValues={homeBox} boxTwoValues={propertiesBox} />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default About;
