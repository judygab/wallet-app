import { useState } from "react";

const TransactionForm = ({ title, onSubmit }) => {
  const [amount, setAmount] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(amount);
    setAmount(0);
  };

  return (
    <form onSubmit={onFormSubmit} className="transaction-form lighter-grey">
      <label>
        {`Amount to ${title}`}
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit" onClick={onFormSubmit}>
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
