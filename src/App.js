import React, { useState } from "react";
import './ToDoList.css';

const ToDoList = () => {
  const [inputText, setInputText] = useState("");
  const [uncompletedList, setUncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Date.now());
    if (inputText.trim() !== "") {
      setUncompletedList([
        ...uncompletedList,
        { text: inputText, id: Date.now() },
      ]);
      setInputText("");
    }
  };

  const handleCheckboxChange = (id, isCompleted) => {
    const itemToMove = isCompleted
      ? completedList.find((item) => item.id === id)
      : uncompletedList.find((item) => item.id === id);

    if (isCompleted) {
      setCompletedList(completedList.filter((item) => item.id !== id));
      setUncompletedList([...uncompletedList, itemToMove]);
    } else {
      setUncompletedList(uncompletedList.filter((item) => item.id !== id));
      setCompletedList([...completedList, itemToMove]);
    }
  };

  return (
    <div className="app-container">
      <h2>My Todo List</h2>
      <div className="border-box">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input className="input-field"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your todo list ..."
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="list-container">
          <div className="list-section">
            <h4>Todo List</h4>
            <ul>
              {uncompletedList.map((item) => (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    onChange={() => handleCheckboxChange(item.id, false)}
                  />
                  <label htmlFor={item.id}>{item.text}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-section">
            <h4>Completed List</h4>
            <ul className="list-items">
              {completedList.map((item) => (
                <li key={item.id}>
                  <input
                    id={item.id}
                    type="checkbox"
                    checked
                    onChange={() => handleCheckboxChange(item.id, true)}
                  />
                  <label htmlFor={item.id}>{item.text}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
    </div>
  );
};

export default ToDoList;