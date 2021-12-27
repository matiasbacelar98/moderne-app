import { createGlobalStyle } from 'styled-components';
import { reset, variables, crimsonTextFonts, utilityClasses, thirdPartyStyles } from './helpers';

const GlobalStyles = createGlobalStyle`
${reset}
${variables};
${crimsonTextFonts}; 
${utilityClasses}
${thirdPartyStyles}
`;

export default GlobalStyles;
