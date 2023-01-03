import logo from './logo.svg';
import './App.css';
import Helloworld from './HelloWorld';


function App() {
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }



  const customStyle = {
    color: "green",
    fontSize: "26px",
  };
  const image = <img src="www.some"></img>

  // const element = (
  // <h1>
  // Hello, {formatName(user)}!
  // </h1>
  // )
  const element = (<h1 style={customStyle}>Hello, Teacher</h1>)
  const secondElement = (<p className="my-text">My next text</p>)
  return (
    //component oruulj irehdee <mean/> 
    <div>
      {element}
      {secondElement}
      <Helloworld/>
    </div>
  );
}
export default App;
