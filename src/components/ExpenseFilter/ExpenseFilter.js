import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [year, setChangedYear] = useState("");

  const onChangehandler = (event) => {
    setChangedYear(event.target.value);
    props.getFilteredYear(event.target.value);
    console.log(year);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onChangehandler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
