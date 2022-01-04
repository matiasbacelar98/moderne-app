import aboutImg from '../assets/images/about.jpg';
import propertiesImg from '../assets/images/properties.jpg';
import homeImg from '../assets/images/home.png';

const aboutBox = {
  title: 'Sobre Moderne',
  text: 'Sobre nosotros',
  imgSrc: aboutImg,
  pathTo: '/sobre-moderne',
};

const propertiesBox = {
  title: 'Propiedades',
  text: 'Elegi tu propiedad',
  imgSrc: propertiesImg,
  pathTo: '/propiedades',
};

const homeBox = {
  title: 'Home',
  text: 'Conocenos',
  imgSrc: homeImg,
  pathTo: '/',
};

export { aboutBox, propertiesBox, homeBox };
