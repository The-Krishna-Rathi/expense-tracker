import React, { useState } from "react";

import Card from "../UI/card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [expenseTitle, setTitle] = useState(props.title);

  const updateText = () => {
    setTitle("Updated :-)");
    console.log(expenseTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={updateText}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
