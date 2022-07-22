import "./expenseDate.css";
const month = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month[props.date.getMonth()]}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__date">{props.date.getDate()}</div>
    </div>
  );
}

export default ExpenseDate;
