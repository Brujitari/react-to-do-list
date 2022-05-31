import { useState } from 'react';
import Input from './Input';
import TaskList from './TaskList';

export default function TaskContainer() {
    const [tasks, setTask] = useState([]);

    const handleKeyUp = (event) => {
        if(event.key === 'Enter' && event.target.value) {
            setTask(prev => [...prev, event.target.value])
        }
    }
    return (
        <section className="input-container">
            <Input handleKeyUp={handleKeyUp}/>
            <TaskList tasks={tasks}/>
        </section>
    )
}