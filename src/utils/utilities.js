const addScrollbar = () => {
  document.body.classList.remove('remove-scroll');
};

const removeScrollbar = () => {
  document.body.classList.add('remove-scroll');
};

const heightValue = 33.33333333333333;

export { addScrollbar, removeScrollbar, heightValue };
