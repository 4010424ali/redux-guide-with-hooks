// every ruducer take two thing to update the state
const personReuducer = (state = {}, action) => {
  if (action.type === 'UPDATE_NAME') {
    return { name: action.payload };
  }
  console.log(action);
  return state;
};

export default personReuducer;
