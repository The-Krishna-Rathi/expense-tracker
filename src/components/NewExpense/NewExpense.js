import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [clicked, setClickStatus] = useState(0);

  const onSaveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    props.getNewExpenses(expenseData);
  };

  const FormDisplayHandler = (clickStatus) => {
    setClickStatus(clickStatus === 0 ? 0 : 1);
    console.log(clicked);
  };

  if (clicked === 0) {
    return (
      <div className="new-expense">
        <button onClick={FormDisplayHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        getCancelStatus={FormDisplayHandler}
      />
    </div>
  );
};

export default NewExpense;
