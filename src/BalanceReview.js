import { useState } from "react";
import TransactionForm from "./TransactionForm";

const BalanceReview = ({ amount, currency }) => {
  const [balance, setBalance] = useState(amount);
  const [modalOpen, setModalOpen] = useState("");

  const onTransactionSubmit = (transactionAmount) => {
    let updatedBalance;
    switch (modalOpen) {
      case "Deposit":
        updatedBalance = balance + parseInt(transactionAmount);
        break;
      case "Withdraw":
        updatedBalance = balance - parseInt(transactionAmount);
        break;
      default:
        updatedBalance = balance;
        break;
    }
    // if deposit, amount is positive otherwise negative
    setBalance(updatedBalance);
    setModalOpen("");
  };

  return (
    <div className="balance-review-container light-grey">
      <div className="balance-info">
        <h1>Balance</h1>
        <p>
          {balance} {currency}
        </p>
      </div>
      <div className="buttons-wrapper">
        {modalOpen !== "Deposit" && (
          <button className="green" onClick={() => setModalOpen("Deposit")}>
            Deposit
          </button>
        )}
        {modalOpen !== "" && (
          <TransactionForm title={modalOpen} onSubmit={onTransactionSubmit} />
        )}
        {modalOpen !== "Widthdraw" && (
          <button className="red" onClick={() => setModalOpen("Withdraw")}>
            Withdraw
          </button>
        )}
      </div>
    </div>
  );
};

export default BalanceReview;
