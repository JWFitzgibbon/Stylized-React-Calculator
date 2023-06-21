import CalcInput from "./components/CalcInput/CalcInput";
import CalcResults from "./components/CalcResults/CalcResults";
import Header from "./components/Header/Header";

// Going to need a switch statement somewhere here to turn userInput["operator"] into an actual operator

function App() {
  return (
    <div>
      <Header />
      <CalcInput />
      <CalcResults />
    </div>
  );
}

export default App;
