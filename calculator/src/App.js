import CalcInput from "./components/CalcInput/CalcInput";
import CalcResults from "./components/CalcResults/CalcResults";
import Header from "./components/Header/Header";

// Going to need a switch statement somewhere here to turn userInput["operator"] into an actual operator

function App() {
  const calculateHandler = (props) => {
    console.log(props.num1, props.operator, props.num2);
    if (props.operator === "+") {
      console.log(props.num1 + props.num2)
    }
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
