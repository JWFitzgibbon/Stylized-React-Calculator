import { useState, Fragment } from "react";
import CalcInput from "./components/CalcInput/CalcInput";
import CalcResults from "./components/CalcResults/CalcResults";
import Header from "./components/Header/Header";

// Going to need a switch statement somewhere here to turn userInput["operator"] into an actual operator

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (props) => {
    setUserInput(props);
  };

  let result;
  if (userInput) {
    switch (userInput.operator) {
      case "+":
        result = +userInput.num1 + +userInput.num2;
        break;
      case "-":
        result = +userInput.num1 - +userInput.num2;
        break;
      case "*":
        result = +userInput.num1 * +userInput.num2;
        break;
      case "/":
        result = +userInput.num1 / +userInput.num2;
        break;
      case "<":
        result = +userInput.num1 < +userInput.num2;
        break;
      case ">":
        result = +userInput.num1 > +userInput.num2;
        break;
      case "%":
        result = +userInput.num1 % +userInput.num2;
        break;
      case "===":
        result = +userInput.num1 === +userInput.num2;
        break;
      default:
        result = "Something went wrong";
    }
  }

  return (
    <Fragment>
      <Header />
      <CalcInput onCalculate={calculateHandler} />
      {userInput && <CalcResults entered={userInput} displayResult={result} />}
    </Fragment>
  );
}

export default App;
