import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2021");

  const getFilteredYearHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter
          selectedYear={filteredYear}
          getFilteredYear={getFilteredYearHandler}
        />
      </div>
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
