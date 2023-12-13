import React from 'react'
import "./list.css";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const List = () => {
    // State variables
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [showTasks, setShowTasks] = useState(false);
    const [editedTodo, setEditedTodo] = useState('');
    // Function to handle adding or editing tasks
    const handleClick = () => {
        if (todo) {
            if (editIndex !== null) {
                const updatedTodos = [...todos];
                updatedTodos[editIndex] = { todo: editedTodo  };
                setTodos(updatedTodos);
                setEditIndex(null);
                setEditedTodo(''); 
            } else {
                 // Add new task
            const newTodo = {
                todo,
            };
            setTodos([...todos, newTodo]);
            setShowTasks(true);
            }
        setTodo('');
        }
    };
    // Function to delete tasks
    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        if (updatedTodos.length === 0) {
            setShowTasks(false); 
        }
    };
    // Function to initiate editing of tasks
    const handleEdit = (index) => {
        const todoToEdit = todos[index];
        setTodo(todoToEdit.todo);
        setEditIndex(index);
    };
    // Function to cancel editing
    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditedTodo('');
    };
    
    // React Router useNavigation
    const navigate = useNavigate();

    return (
        <div>
            <form className='form2'>
                <h1>List Todo</h1>
                <div className='question'>
                    <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} required />
                        <label>Task</label>
                </div>
                <button type='button' onClick={handleClick}> ADD </button>
                <button type='button' onClick={() => navigate('/')}>BACK</button>
            </form>
            {/* THE show task when i click on the button ADD*/}
            {showTasks && (
                <div className='tasktodo'>
                    <h2>Tasks :</h2>
                    {todos.map((item, index) => (
                    <div  className="task" key={index}>
                    {editIndex === index ? (
                        <div>
                            <input
                                type='text'
                                value={editedTodo}
                                onChange={(e) => setEditedTodo(e.target.value)} 
                            />
                            <button type='button' onClick={() => handleClick()}>SAVE </button>
                            <button type='button' onClick={() => handleCancelEdit()}>CANCEL</button>
                        </div>
                    ) : (
                        <div>
                            <input type='text' value={item.todo} readOnly />
                            <button type='button' onClick={() => handleEdit(index)}>EDIT</button>
                            <button type='button' onClick={() => handleDelete(index)}>DELETE</button>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            )}
            </div>
        );
    };

export default List;