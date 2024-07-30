import { useState } from "react";

const UserInput = ({ onChangeInput, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            name="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label htmlFor="initial-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            name="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            name="expected-return"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="initial-investment">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
