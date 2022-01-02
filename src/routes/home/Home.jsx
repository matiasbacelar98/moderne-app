import Qualities from '../../components/qualities/Qualities';
import { qualityOne, qualityTwo, qualityThree } from '../../utils/qualitiesData';

import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div
      className='wrapper flow-spacing header-spacing-top footer-spacing-bottom'
      style={{ height: '1000vh', paddingTop: '80rem' }}
    >
      <Qualities values={qualityOne} />
      <Qualities values={qualityTwo} reverse />
      <Qualities values={qualityThree} />

      <Footer spacing='footer-spacing-top footer-spacing-bottom' />
    </div>
  );
};

export default Home;
