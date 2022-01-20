import { useParams } from 'react-router-dom';
import Layout from '../../components/reusable/layout/Layout';
import Head from '../../components/reusable/head/Head';
import Navigation from '../../components/reusable/navigation/Navigation';
import { propertiesBox, aboutBox } from '../../utils/navigationData';

const SinglePropertie = () => {
  const { id } = useParams();

  return (
    <>
      <Head title='Propiedades' description={`Propiedad - Moderne ${id}`} />

      <Layout isHeaderLight={false}>
        <main className='flow-spacing spacing-top'>
          <section>
            <Navigation boxOneValues={propertiesBox} boxTwoValues={aboutBox} />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default SinglePropertie;
