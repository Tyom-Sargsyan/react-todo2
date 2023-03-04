import React, { useRef } from 'react'
function TodoForm({ handleSubmit}) {
    const formRef = useRef(null)


  return (
    <form ref={formRef} onSubmit={() => handleSubmit()}>
        <input type="text" />
        <button>Add Item</button>
    </form>
  )
}

export default TodoForm