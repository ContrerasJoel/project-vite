import React, {useContext} from 'react'
import TaskCard from './TaskCard'
import TaskContext from '../context/TaskContext'

const TaskList = () => {
    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0){
        return <h1 className='text-white text-2xl font-black text-center'>Cumpliste con tus tareas!</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    )
}

export default TaskList