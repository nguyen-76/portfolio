import React from 'react'

function AddTaskForm({handleSubmit, newTask, handleInputChange}) {
  return (
    <form onSubmit={handleSubmit} className="form">
    <label htmlFor="new-item">Add to the todo list</label>
    <input type="text" id="new-item" value={newTask} onChange={handleInputChange} />
    <button type="submit">Add item</button>
  </form>
  )
}

export default AddTaskForm
