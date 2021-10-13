import React from 'react';
import { useEditTask } from '../hooks/taskHooks';
import Form from '../components/common/Form';
import { FormTypes } from '../hooks/taskHooks';
import { Task, TaskErrors } from '../models/task';

export default function EditTask(): JSX.Element {
  const editTaskForm: FormTypes<Task, TaskErrors> = useEditTask();

  return <Form {...editTaskForm} add={false} />;
}
