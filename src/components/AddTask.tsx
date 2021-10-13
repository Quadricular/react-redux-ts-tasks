import React from 'react';
import { useAddTask } from '../hooks/taskHooks';
import Form from './common/Form';
import { FormTypes } from '../hooks/taskHooks';
import { Task, TaskErrors } from '../models/task';

export default function AddTask(): JSX.Element {
  const addTaskForm: FormTypes<Task, TaskErrors> = useAddTask();

  return (
    <>
      <Form {...addTaskForm} add={true} />
      {addTaskForm.submitting ? <>Submitting....</> : <></>}
    </>
  );
}
