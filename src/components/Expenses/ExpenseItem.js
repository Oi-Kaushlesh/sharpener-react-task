// Write your code at the relevant places in the code below
import React,  {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem= (props)=> {
  const [title, setTitle] = useState(props.title)
  function buttonClick(){
    setTitle("New Title");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <button onClick={buttonClick}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;