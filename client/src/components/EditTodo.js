import React, { useState } from 'react'

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <>
            <button type="button" className="btn btn-warning size-sm" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${todo.todo_id}`}>
                Edit
            </button>

            <div className="modal fade" id={`staticBackdrop${todo.todo_id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Todo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => setDescription(todo.description)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={e => updateDescription(e)} className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EditTodo
