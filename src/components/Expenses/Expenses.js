import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2021");

  const getFilteredYearHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        getFilteredYear={getFilteredYearHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
