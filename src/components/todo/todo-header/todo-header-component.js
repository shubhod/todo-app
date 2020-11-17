import React from 'react'
import "./todo-header-styles.scss"
const TodoHeader = ({children}) => {
    return (
        <div className="todo-header">
            <div className="todo-header__title"><h1>TodoApp</h1></div>
            {children}
        </div>
    )
}

export default TodoHeader
