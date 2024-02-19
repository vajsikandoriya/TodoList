import React, { useState } from 'react'

export default function ToDoInput(props) {
  const [inputText,setInputText] = useState('');
  // const setInputTextOnChange = (e) => {
  //   setInputText(e.target.value);
  // }
  return (
    <div>
      <input type='text' value={inputText} className='add-input' placeholder='Add your Todo...' onChange={e => {
        setInputText(e.target.value);
      }} />
      <button className='add' 
      onClick = {() => {
        props.addList(inputText)
        setInputText('')
      }}
      >Add</button>
    </div>
  )
}
