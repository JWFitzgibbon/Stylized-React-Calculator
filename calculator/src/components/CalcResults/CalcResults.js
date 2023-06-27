function CalcResults(props) {
  return (
    <div className="results-container">
      <p>You entered:</p>
      <code>The props originally from CalcInput should be passed here.</code>
      <p>Result is:</p>
      <p style={{ color: "#F7F382", fontSize: "1.5rem" }}>
        {props.displayResult.toString()}
      </p>
    </div>
  );
}

export default CalcResults;
