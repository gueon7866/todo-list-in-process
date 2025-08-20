import React ,{useState} from 'react'
import "./TodoItem.css"
const TodoItem = ({todo ,onDelete,onUpdateChecked, onUpdateText}) => {

  const [editing, setEditing]=useState(false)
  const [text,setText]=useState(todo.text)
  const isCompleted = !!todo.isCompleted

  const startEdit=()=>{
    setText(todo.text)
    setEditing(true)
  }

  const cancleEdit=()=>{
    setText(todo.text)
    setEditing(false)
  }

  const saveEdit =async()=>{
    const next = text.trim()
    await onUpdateText(todo._id,next)
  }
  return (
    <div className={`TodoItem ${isCompleted? 'isCompleted':''}`}>
        <input 
        type="checkbox"
        checked={todo.isCompleted} 
        onChange={()=>onUpdateChecked(todo._id,!todo.isCompleted)}
        readOnly />
        <div className="content">{todo.text}</div>
        <div className="date">{new Date(`${todo.date}`).toLocaleDateString()}</div>
        <div className="btn-wrap">
            <button className="updateBtn">수정</button>
            <button className="deleteBtn" 
            onClick={()=>onDelete(todo._id)}
            >삭제</button>
        </div>
    </div>
  )
}

export default TodoItem