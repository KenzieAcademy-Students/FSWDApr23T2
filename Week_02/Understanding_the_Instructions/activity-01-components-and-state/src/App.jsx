// Import your component here
import "./App.css";
import ReusableComponent from "./ReusableComponent";

function App() {
  let myName = "Cody";
  let myAge = 32;
  let myPhoneNumber = "some number";
  return (
    <div className="App">
      <h1>React Potato</h1>
      <ReusableComponent
        name={myName}
        age={myAge}
        phoneNumber={myPhoneNumber}
      />
      {/* After creating your new component, render your component with props */}
    </div>
  );
}

export default App;
