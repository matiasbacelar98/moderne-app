import Header from '../../components/header/Header';
import bgImage from '../../assets/images/bg.jpg';

const Home = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          background: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <Header light />
      </div>
      <div style={{ height: '100vh' }} />
    </>
  );
};

export default Home;
