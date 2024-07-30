import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newVlaue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newVlaue };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
