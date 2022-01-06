import { useLayoutEffect } from 'react';
import { toggleScrollbar } from '../utils/utilities';

export const useRemoveScrollEntry = isEntryActive => {
  useLayoutEffect(() => {
    if (!isEntryActive) return;

    // remove scroll
    toggleScrollbar();
  }, [isEntryActive]);
};
