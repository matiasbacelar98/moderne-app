const blocksWrapperAnimation = {
  to: () => ({
    transition: {
      staggerChildren: 0.1,
    },
  }),
};

const blockAnimation = {
  to: () => ({
    width: '0',
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut',
    },
  }),
};

export { blocksWrapperAnimation, blockAnimation };
