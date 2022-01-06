import LogoEntry from '../logoEntry/LogoEntry';
import { heightValue } from '../../utils/utilities';
import {
  StyledFixedWrapper,
  StyledBlockWrapper,
  StyledBlock,
} from '../../styles/reusable/animations';
import { blocksWrapperAnimation, blockAnimation } from './animations';

const Entrance = () => {
  return (
    <StyledFixedWrapper center className='moveElementForward-100'>
      <StyledBlockWrapper exit='exit' variants={blocksWrapperAnimation} key='blocks'>
        <StyledBlock variants={blockAnimation} value={0} right />
        <StyledBlock variants={blockAnimation} value={heightValue} right />
        <StyledBlock variants={blockAnimation} value={heightValue * 2} right />
      </StyledBlockWrapper>

      <LogoEntry />
    </StyledFixedWrapper>
  );
};

export default Entrance;
