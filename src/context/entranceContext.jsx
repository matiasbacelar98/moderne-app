/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Context
const EntranceContext = createContext();

// Export context
export const useEntranceContext = () => useContext(EntranceContext);

// Provider
const EntranceProvider = props => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [unmountEntrance, setUnmountEntrance] = useState(false);

  return (
    <EntranceContext.Provider
      value={{ isFirstRender, setIsFirstRender, unmountEntrance, setUnmountEntrance }}
    >
      {props.children}
    </EntranceContext.Provider>
  );
};

// Proptypes
EntranceProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default EntranceProvider;
