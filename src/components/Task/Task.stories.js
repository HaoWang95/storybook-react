import React from 'react';
import Task from './Task';


export default {
    component: Task,
    title: 'Task',
};

const TaskTemplate = args => <Task {...args} />

export const Default = TaskTemplate.bind({});

Default.args = {
    task:{
        id: '1',
        taskTitle: 'Test React Storybook',
        taskState: 'TASK_INBOX',
        updatedAt: new Date()
    },
};

export const Pinned = TaskTemplate.bind({});

Pinned.args = {
    task:{
        ...Default.args.task,
        taskState: 'TASK_PINNED',
    },
};

export const Archived = TaskTemplate.bind({});

Archived.args = {
    task:{
        ...Default.args.task,
        taskState: 'TASK_ARCHIVED',
    }
};

