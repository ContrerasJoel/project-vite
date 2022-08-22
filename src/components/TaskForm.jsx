import React, { useState, useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TaskForm() {
    const { createTask } = useContext(TaskContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleTextArea = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title, description);
        setDescription("")
        setTitle("")
    }

    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-800 p-5 mb-4' onSubmit={handleSubmit}>
                <h1 className='text-2x1 font-bold text-white mb-3'>Crea tu tarea</h1>
                <input
                    className='bg-slate-300 p-3 w-full mb-2'
                    type="text"
                    placeholder='Ingrese tarea'
                    onChange={handleInput}
                    value={title}
                    autoFocus
                />
                <textarea
                    className='bg-slate-300 p-3 w-full mb-2'
                    placeholder='Descripcion'
                    onChange={handleTextArea}
                    value={description}
                />
                <button  className='bg-green-700 px-2 py-1 rounded-md mt-4 hover:bg-green-300'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm


