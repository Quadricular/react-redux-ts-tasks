import React from 'react';
import { useDispatch } from 'react-redux';
import Task from './Task';
import { Task as ITask } from '../models/task';
import { toggleTaskAction, deleteTaskAction } from '../store/actions/tasksActions';
import { useGetVisibleTasks } from '../hooks/taskHooks';

const TaskList = (): JSX.Element => {
  const dispatch = useDispatch();
  const tasks = useGetVisibleTasks();

  return (
    <ul>
      {tasks.map((task: ITask) => (
        <Task
          key={task.id}
          data={{ ...task }}
          toggleTask={() =>
            dispatch(toggleTaskAction({ id: task.id, completed: task.completed }))
          }
          deleteTask={() => dispatch(deleteTaskAction({ id: task.id }))}
        />
      ))}
    </ul>
  );
};

export default TaskList;
