import Navigation from '../../components/navigation/Navigation';
import { propertiesBox, aboutBox } from '../../utils/navigationData';

const Home = () => {
  return (
    <div
      className='flow-spacing header-spacing-top footer-spacing-bottom'
      style={{ height: '120vh' }}
    >
      <Navigation boxOneValues={propertiesBox} boxTwoValues={aboutBox} />
    </div>
  );
};

export default Home;
