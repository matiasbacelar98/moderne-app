import { css } from 'styled-components';
import { fluidValues } from './functions';

export const variables = css`
  :root {
    // Fonts
    --font: 'Crimson Text', serif;
    --fs-1: ${fluidValues(280, 1400, 41, 83)};
    --fs-2: ${fluidValues(280, 1400, 32, 48)};
    --fs-3: ${fluidValues(280, 1400, 29, 40)};
    --fs-error: ${fluidValues(280, 1400, 180, 350)};
    --fs-text-large: ${fluidValues(280, 1400, 16, 20)};
    --fs-text-small: 1rem;
    --line-height-text: 1.5;
    --line-height-headings: 1.2;
    // Spacing
    --spacing-1: ${fluidValues(280, 1400, 80, 128)};
    // Colors
    --clr-light: hsl(0, 0%, 100%);
    --clr-dark: hsla(0, 0%, 0%);
    --clr-blue: hsl(219, 65%, 44%);
  }
`;
