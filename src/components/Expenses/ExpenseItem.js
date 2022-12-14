import React from "react";

import Card from "../UI/card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> Rs.{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
