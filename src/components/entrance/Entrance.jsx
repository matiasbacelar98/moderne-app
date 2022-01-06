import {
  StyledFixedWrapper,
  StyledBlocksWrapper,
  StyledBlock,
} from '../../styles/reusable/animations';
import LogoEntry from '../logoEntry/LogoEntry';
import { blocksWrapperAnimation, blockAnimation } from './animations';

const Entrance = () => {
  const heightValue = 33.33333333333333;

  return (
    <StyledFixedWrapper className='moveElementForward-100'>
      <StyledBlocksWrapper exit='exit' variants={blocksWrapperAnimation} key='blocks'>
        <StyledBlock variants={blockAnimation} value={0} />
        <StyledBlock variants={blockAnimation} value={heightValue} />
        <StyledBlock variants={blockAnimation} value={heightValue * 2} />
      </StyledBlocksWrapper>

      <LogoEntry />
    </StyledFixedWrapper>
  );
};

export default Entrance;
