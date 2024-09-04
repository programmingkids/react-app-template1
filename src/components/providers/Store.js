export const reducer = (state, action) => {
  switch (action.type) {
    case 'xxxx':
      return getX(state, action);
    default:
      return state;
  }
};

const getX = (state, action) => {
  return state;
};
