import React from 'react';
import Task from './Task';
import { Task as ITask } from '../models/task';
import { ToggleTaskRequest, DeleteTaskRequest } from '../store/types';

const TaskList = ({
  tasks,
  toggle,
  deleteT,
}: {
  tasks: ITask[];
  toggle: (id: string, completed: boolean) => ToggleTaskRequest;
  deleteT: (id: string) => DeleteTaskRequest;
}): JSX.Element => {
  console.log();
  return (
    <ul>
      {tasks.map((task: ITask) => (
        <Task
          key={task.id}
          {...task}
          toggle={() => toggle(task.id, !task.completed)}
          deleteT={() => deleteT(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
