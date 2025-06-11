import { useState } from "react";
import "./App.css";

function App() {
  //making state of our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  // logic

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height ===  0) {
      alert("Please enter a valid weight and height")
    }
    else{
      let bmi = (weight/(height * height) * 703)
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage(`you are under weight ${bmi}`)
      }
      else if(bmi >= 25  && bmi < 30){
        setMessage(`you are the healthy weight persons. ${bmi}`)
      }else{
        setMessage(`You are over Weight Persons . ${bmi}`)
      }
    }

  }

  // reload

  let reload = () => {
    window.location.reload()
  }
  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(libs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> Height:</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI IS : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
