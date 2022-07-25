import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const expenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }

  return props.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
};

export default expenseList;
