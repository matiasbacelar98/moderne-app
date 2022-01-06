import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/globalStyles';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Properties from './routes/properties/Properties';
import SinglePropertie from './routes/singlePropertie/SinglePropertie';
import NotFound from './routes/404/NotFound';

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-moderne' element={<About />} />
          <Route path='/propiedades' element={<Properties />} />
          <Route path='/propiedades/:id' element={<SinglePropertie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
