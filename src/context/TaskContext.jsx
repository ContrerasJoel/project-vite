import React, { useState, createContext, useEffect } from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, taskDescription) {
        setTasks([...tasks, {
            title: taskTitle,
            id: tasks.length,
            descripcion: taskDescription
        }])
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: tasks, 
                createTask: createTask,
                deleteTask: deleteTask
            }}
        >
    { props.children }
        </TaskContext.Provider >
    )
}

export default TaskContext