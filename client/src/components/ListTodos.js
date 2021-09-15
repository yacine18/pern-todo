import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos')
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message)
        }

    }

    // delete todo function
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        getTodos()
    }, [])
    return (
        <div>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListTodos
