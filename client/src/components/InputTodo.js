import React, { useState } from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            setDescription(response)
            setDescription('')
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <h2 className="text-center mt-5">Pern Todo List</h2>
            <form className="d-flex mt-5" onSubmit={submitHandler}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add Todo"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success mx-2">Add</button>
            </form>
        </div>
    )
}

export default InputTodo
