const fetch_user = dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({ type: 'UPDATE_USER', payload: data }));
};

// export const update_user = {
//   type: 'UPDATE_USER',
//   payload: 'cricket'
// };

export default fetch_user;
