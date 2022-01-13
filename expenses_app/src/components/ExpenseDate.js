import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const year = props.date.fullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day });

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
