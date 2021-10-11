import React from 'react';
import Task from './Task';
import { Task as ITask } from '../models/task';
import { ToggleTaskRequest } from '../store/types';

const TaskList = ({
  tasks,
  toggleTask,
}: {
  tasks: ITask[];
  toggleTask: (id: string) => ToggleTaskRequest;
}): JSX.Element => {
  return (
    <ul>
      {tasks.map((task: ITask) => (
        <Task key={task.id} {...task} onClick={() => toggleTask(task.id)} />
      ))}
    </ul>
  );
};

export default TaskList;
