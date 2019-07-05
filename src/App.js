import React from 'react';
import './App.css';
import { update_person } from './store/actions/personAction';
import { update_game } from './store/actions/gameAction';
import fetch_user from './store/actions/userAction';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const person = useSelector(state => state.person.name);
  const game = useSelector(state => state.game.name);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);

  return (
    <div className="App">
      <h1>Reudux Guide</h1>
      <p>Person Name: {person}</p>
      <button onClick={() => dispatch(update_person)}>Update Person</button>
      <br />
      <p>Game name: {game}</p>
      <button onClick={() => dispatch(update_game)}>Update Person</button>
      <br />
      <button
        style={{ marginTop: '1rem' }}
        onClick={() => dispatch(fetch_user)}
      >
        Fetch the User
      </button>
      {user.length === 0 ? (
        <p>Users not found</p>
      ) : (
        user.map(item => (
          <p key={item.id}>
            {item.id} {item.email}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
