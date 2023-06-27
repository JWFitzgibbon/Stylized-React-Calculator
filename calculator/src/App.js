import CalcInput from "./components/CalcInput/CalcInput";
import CalcResults from "./components/CalcResults/CalcResults";
import Header from "./components/Header/Header";

// Going to need a switch statement somewhere here to turn userInput["operator"] into an actual operator

function App() {
  const calculateHandler = (props) => {
    let result;
    switch (props.operator) {
      case "+":
        result = +props.num1 + +props.num2;
        break;
      case "-":
        result = +props.num1 - +props.num2;
        break;
      case "*":
        result = +props.num1 * +props.num2;
        break;
      case "/":
        result = +props.num1 / +props.num2;
        break;
      case "<":
        result = +props.num1 < +props.num2;
        break;
      case ">":
        result = +props.num1 > +props.num2;
        break;
      case "%":
        result = +props.num1 % +props.num2;
        break;
      case "==":
        result = +props.num1 === +props.num2;
        break;
      default:
        result = "Something went wrong";
    }
    console.log(result);
  };

  return (
    <div>
      <Header />
      <CalcInput onCalculate={calculateHandler} />
      <CalcResults />
    </div>
  );
}

export default App;
