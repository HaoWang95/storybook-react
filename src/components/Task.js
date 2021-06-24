import React from 'react';


export default function Task({task: {id, taskTitle, taskState}, onArchiveTask, onPinTask}){
    return (
        <div className = "task-list">
            <input type="text" value={taskTitle} readOnly={true} />
        </div>
    )
}