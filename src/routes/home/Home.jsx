import { AnimatePresence } from 'framer-motion';
import Entrance from '../../components/entrance/Entrance';
import { useEntranceContext } from '../../context/entranceContext';
import { toggleScrollbar } from '../../utils/utilities';
import { useRemoveScrollEntry } from '../../hooks/useRemoveScrollEntry';

const Home = () => {
  const { isFirstRender, unmountEntrance } = useEntranceContext();
  // Remove scroll for entrance animation
  useRemoveScrollEntry(isFirstRender);

  return (
    <div
      style={{
        height: '300vh',
      }}
    >
      <AnimatePresence onExitComplete={toggleScrollbar}>
        {!unmountEntrance ? <Entrance /> : null}
      </AnimatePresence>
    </div>
  );
};

export default Home;
