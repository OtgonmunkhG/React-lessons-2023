import logo from './logo.svg';
import './App.css';

function Profile(props){
  console.log("props", props);
  const {img, name, age, gender, status, profession} = props;
  //shineer variable todorhoiloh zereg
  //destructuring
  return(
    <div className="profile">
      <img src={img} alt=""/>
      <p> name: {name}</p>
      <p> age: {age}</p>
      <p>gender:{gender}</p>
      <p>status:{status}</p>
      <p>profession:{profession}</p>
    </div>
  )
}
function App() {
  // const user = {
  //   img: '',
  //   name: "Jhon Smith",
  //   age: 20,
  //   profession: "Frontend Developer"

  // }
  return (
    <div className="app">
        <Profile
          img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
          name="Jhon Smith"
          age={20}
          gender='Female'
          status='Marred'
          profession='High-school Teacher'
        />
        <Profile
          img='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
          name= "Linda Smith"
          age={25}
          gender= 'Male'
          status= ' Single'
          profession= 'Frontend developer'
        />
        {/* {...users} */}
    </div>
  )
}

export default App;
