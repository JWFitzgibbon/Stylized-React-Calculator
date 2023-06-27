function CalcResults(props) {
  console.log(props.entered);
  return (
    <div className="results-container">
      <p>You entered:</p>
      <code>
        {props.entered.num1 +
          " " +
          props.entered.operator +
          " " +
          props.entered.num2}
      </code>
      <p>Result is:</p>
      <p style={{ color: "#F7F382", fontSize: "1.5rem" }}>
        {props.displayResult.toString()}
      </p>
    </div>
  );
}

export default CalcResults;
