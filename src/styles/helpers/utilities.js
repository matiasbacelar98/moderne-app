import { css } from 'styled-components';
import { respondTo } from './media';

export const utilityClasses = css`
  //--------- Spacing ---------//
  .flow-spacing > * + * {
    margin-top: var(--spacing-1);
  }

  .flow-spacing-content > * + * {
    margin-top: 2.5rem; // 40px
  }

  .header-spacing-top {
    margin-top: 3.5rem; // 56px
  }

  .footer-spacing-top {
    margin-top: var(--spacing-1);
  }

  .footer-spacing-bottom {
    margin-bottom: 3.5rem;
  }

  //--------- Typography ---------//
  .text-white {
    color: var(--clr-light);
  }

  .text-semibold {
    font-weight: 600;
  }

  .max-width-500 {
    max-width: 31.25rem; // 500px
  }

  .active-desktop-link {
    color: var(--clr-blue);
  }

  //--------- Layout ---------//
  .wrapper {
    width: 90%;
    max-width: 87.5rem; /* MAX WIDTH => 1400px */
    margin-inline: auto;

    ${respondTo.md`
      width: 95%;
    `}
  }

  //--------- Various ---------//
  .remove-scroll {
    overflow-y: hidden;
    padding-right: ${props => props.scrollbarWidth}px;
  }
`;
