import React, { useCallback, useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'

function Todo() {
    const [todo, setTodo] = useState([])

    const handleSubmit = useCallback(() => {
        setTodo(todo =>[
            {
                id: new Date().getTime().toString(),
                title: formRef.current[0].value,
                completed: false
            },
            ...todo
        ])
    },[])
  return (
    <div>
        <TodoForm {...{handleSubmit}}/>
        <Todo {...{todo}}/>
    </div>
  )
}

export default Todo