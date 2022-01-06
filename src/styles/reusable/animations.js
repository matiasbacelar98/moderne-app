import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledFixedWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledBlocksWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const StyledBlock = styled(motion.div)`
  position: absolute;
  top: ${props => `${props.value}%`};
  right: 0;
  width: 100%;
  height: calc(100% / 3);
  background-color: var(--clr-dark);
`;

export { StyledFixedWrapper, StyledBlocksWrapper, StyledBlock };
