import { css } from 'styled-components';
import { respondTo, breakpoints } from './media';

export const utilityClasses = css`
  //--------- Spacing ---------//
  .flow-spacing > * + * {
    margin-top: var(--spacing-1);
  }

  .flow-spacing-content > * + * {
    margin-top: 2.5rem; // 40px
  }

  .spacing-top {
    margin-top: var(--spacing-1);
  }

  .footer-spacing-bottom {
    margin-bottom: 3.5rem;
  }

  .rm-spacing-xl > * + * {
    @media (min-width: ${breakpoints.xl}) {
      margin: 0;
    }
  }

  //--------- Typography ---------//
  .text-white {
    color: var(--clr-light);
  }

  .text-dark {
    color: var(--clr-dark);
  }

  .text-semibold {
    font-weight: 600;
  }

  .max-width-500 {
    max-width: 31.25rem; // 500px
  }

  .mobile-link {
    font-size: 2.2rem;
    font-weight: 400;
    color: var(--clr-light);
    transition: color 0.2s ease;

    &:hover {
      cursor: pointer;
    }
  }

  .active-link {
    color: var(--clr-blue);
  }

  .underline {
    text-decoration: underline;
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
  }

  .boxShadow {
    box-shadow: 0px 10px 10px -15px var(--clr-dark);
  }

  .moveElementForward-10 {
    position: relative;
    z-index: 10;
  }
`;
