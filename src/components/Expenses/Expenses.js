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

  function filterByYear(x) {
    return x.date.getFullYear().toString() === filteredYear;
  }

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter
          selectedYear={filteredYear}
          getFilteredYear={getFilteredYearHandler}
        />
      </div>
      {props.expenses.filter(filterByYear).map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
