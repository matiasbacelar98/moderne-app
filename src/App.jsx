import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Properties from './routes/properties/Properties';
import SinglePropertie from './routes/singlePropertie/SinglePropertie';
import NotFound from './routes/404/NotFound';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-moderne' element={<About />} />
        <Route path='/propiedades' element={<Properties />} />
        <Route path='/propiedades/:id' element={<SinglePropertie />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
