import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    props.getNewExpenses(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
