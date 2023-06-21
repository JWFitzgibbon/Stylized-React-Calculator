import { useState } from "react";

const initialUserInput = {
  num1: 2,
  num2: 2,
  operator: "+",
};

function CalcInput() {
  const [userInput, setUserInput] = useState(initialUserInput);

  const clickHandler = (event) => {
    event.preventDefault();
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        operator: event.target.value,
      };
    });
  };

  const changeHanlder = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "Submitted with operator: " +
        userInput["num1"] +
        " " +
        userInput["operator"] +
        " " +
        userInput["num2"]
    );
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label>First Number</label>
          <input
            onChange={(event) => changeHanlder("num1", event.target.value)}
            value={userInput["num1"]}
            type="number"
          ></input>
        </p>
        <p>
          <label>Second Number</label>
          <input
            onChange={(event) => changeHanlder("num2", event.target.value)}
            value={userInput["num2"]}
            type="number"
          ></input>
        </p>
      </div>
      <p>
        {userInput["num1"]} {userInput["operator"]} {userInput["num2"]}
      </p>
      <div>
        <button type="button" value="+" onClick={clickHandler}>
          +
        </button>
        <button type="button" value="-" onClick={clickHandler}>
          -
        </button>
        <button type="button" value="x" onClick={clickHandler}>
          x
        </button>
        <button type="button" value="/" onClick={clickHandler}>
          ÷
        </button>
        <button type="button" value="<" onClick={clickHandler}>
          &lt;
        </button>
        <button type="button" value=">" onClick={clickHandler}>
          &gt;
        </button>
        <button type="button" value="%" onClick={clickHandler}>
          %
        </button>
        <button type="button" value="==" onClick={clickHandler}>
          ==
        </button>
      </div>
      <div className="submit-btn">
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}

export default CalcInput;
