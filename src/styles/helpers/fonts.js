import { css } from 'styled-components';

import CrimsonTextRegular from '../../assets/fonts/CrimsonText-Regular.ttf';
import CrimsonTextSemibold from '../../assets/fonts/CrimsonText-SemiBold.ttf';

export const crimsonTextFonts = css`
  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Crimson Text Regular'), url(${CrimsonTextRegular});
  }

  @font-face {
    font-family: 'Crimson Text';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Crimson Text SemiBold'), url(${CrimsonTextSemibold});
  }
`;
