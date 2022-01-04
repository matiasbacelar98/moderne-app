import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { respondTo } from '../../styles/helpers';

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 1.5rem 0 0.5rem 0;
  background-color: ${props => (props.bgTransparent ? 'transparent' : 'var(--clr-light)')};
  transition: box-shadow 0.3s ease-out;

  ${respondTo.lg`
      padding: 1.8rem 0;
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${respondTo.lg`
      display: grid;
      grid-template-columns: repeat(3 , max-content) 1fr repeat(4, max-content); 
      grid-template-areas: 'hamburguer logo pathname . properties facebook mail contact';
      align-items: center;

      .logo {
        grid-area: logo;
        margin: 0 1rem 0 3.75rem; // 60px
      }

      .hamburguer {
        grid-area: hamburguer;
      }

      .pathname {
        grid-area: pathname;
      }

      .facebook-icon {
        grid-area: facebook;
        margin-right: 2.5rem;
      }

      .mail-icon {
        grid-area: mail;
        margin-right: 2.5rem;
      }

      .properties-link {
        grid-area: properties;
        margin-right: 2.5rem;
      }
      
      .contact-link {
        grid-area: contact;
      }
  `}

  .pathname {
    display: none;

    ${respondTo.lg`
        display: flex;
        align-items: center;

        p {margin-left : 1rem;}
    `}
  }

  .facebook-icon,
  .mail-icon,
  .properties-link,
  .contact-link {
    display: none;

    ${respondTo.lg`
      display: inline-block;
    `}
  }
`;

const StyledFacebookIcon = styled(FaFacebookF)`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
`;

const StyledMailIcon = styled(FiMail)`
  width: 1.8rem;
  height: 2rem;
  margin-top: 0.5rem;
`;

const StyledBg = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-light);
`;

export { StyledHeader, StyledWrapper, StyledFacebookIcon, StyledMailIcon, StyledBg };
