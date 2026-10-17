import { use, useEffect, useState } from "react";
import './ToDo.css';
import { v4 as uuidv4 } from 'uuid';

export default function ToDo() {

    const [toDo, setToDo] = useState([]);
    const [newTask, setTask] = useState('');
    console.log(newTask)

    useEffect(() => {
        const savedToDo = JSON.parse(localStorage.getItem("todo"));
        if (savedToDo) setToDo(savedToDo);
    }, [])

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(toDo));
    }, [toDo]);



    const addToDoValue = (event) => {
        setTask(event.target.value);
    };

    const addTaskToDo = () => {
        if (newTask.trim() === '') return;
        setToDo((toDos) => [...toDos, { task: newTask, id: uuidv4(), isDone: false }]);
        setTask('');
    };

    const deleteTaskToDo = (taskKey) => {
        setToDo(toDo.filter((todo) => (todo.id != taskKey)));
        console.log('task is deleted !');
    }

    const updateTask = (taskKey) => {
        setToDo((toDos) =>
            toDos.map((toDoTask) => {
                if (toDoTask.id === taskKey) {
                    const isUpper = toDoTask.task === toDoTask.task.toUpperCase();
                    return {
                        ...toDoTask,
                        task: isUpper ? toDoTask.task.toLowerCase() : toDoTask.task.toUpperCase()
                    };
                }
                else {
                    return toDoTask;
                }
            })
        )
    }

    const updateToAll = () => {
        setToDo((toDos) =>
            toDos.map((toDo) => {
                return { ...toDo, task: toDo.task.toUpperCase() }
            })
        )
    }

    const markAsIsDone = (taskKey) => {
        setToDo((toDos) =>
            toDos.map((todo) => {
                if (todo.id === taskKey) {
                    return { ...todo, isDone: true };
                } else {
                    return todo;
                }
            })
        );
    };


    return (
        <>
            <h2>TO-DO</h2>
            <input
                type="text"
                placeholder="Enter task to add."
                value={newTask}
                onChange={addToDoValue}
            />
            <button type="submit" onClick={addTaskToDo}>Add task</button>

            <div className="tasks">
                <ul>
                    {toDo.map((t) => (
                        <li className="task" key={t.id}><div className={`taskBadge ${t.isDone ? 'done' : ''}`}>{t.task}</div> &nbsp; <button onClick={() => deleteTaskToDo(t.id)}>delete</button>
                            &nbsp; <button onClick={() => updateTask(t.id)}>upper/lower</button> &nbsp; &nbsp; <button onClick={() => markAsIsDone(t.id)}>Done</button></li>
                    ))}
                </ul>
                <button onClick={updateToAll}>All-In-Uppercase</button>

            </div>
        </>
    );
}


