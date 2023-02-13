import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  function handleRegister(e) {
    e.preventDefault();
    console.log(e);

    console.log(users);
    console.log(e.target.firstname.value);
    const newUser = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      password: e.target.password.value,
      confirm: e.target.confirm.value
    }
    console.log(newUser);
    
    setUsers([...users, newUser])


  }


  return (
    <div className="App">
      <form onSubmit={handleRegister} >
        <label>
          Firstname:
        </label>
        <input name='firstname' ></input>
        <br />
        <label>
          Lastname:

        </label>
        <input name='lastname'></input>
        <br />
        <label>
          Password:
        </label>
        <input name='password'></input><br />
        <label>
          Confirm Password:
        </label>
        <input name='confirm'></input><br />

        <button>Register:</button>


      </form>
      <h2> User review
        {users.map(u => {
          return(
            <div>
              <div>
                {u.firstname}
              </div>
              <div>
                {u.lastname}
              </div>
            </div>
          )
        })}
      </h2>
    </div>
  );
}

export default App;
