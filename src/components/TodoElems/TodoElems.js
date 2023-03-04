import React from 'react'

function TodoElems({completed, id, title}) {
  return (
    <>
        <h2 key={id}>{title}</h2><input checked = {completed} type="checkbox" />
    </>
  )
}

export default TodoElems