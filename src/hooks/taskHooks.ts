import { BaseSyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../store/actions/tasksActions';
import { v4 as uuidv4 } from 'uuid';
import { UseFormRegister } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Task, TaskErrors, taskSchema } from '../models/task';
import React from 'react';

export interface FormTypes<T, E> {
  register: UseFormRegister<T>;
  submitting: boolean;
  handleSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  errors: E;
}

export const useAddTask = (): FormTypes<Task, TaskErrors> => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Task>({ resolver: yupResolver(taskSchema) });

  const [submitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!errors?.name && isSubmitted) {
      setSubmitting(true);
    } else {
      setSubmitting(false);
    }
  }, [errors, isSubmitted]);

  return {
    register,
    submitting,
    handleSubmit: handleSubmit(
      (data: Task) =>
        data &&
        dispatch(
          addTaskAction({
            data: {
              id: uuidv4(),
              name: data.name,
              description: 'Lorem',
              deadline: new Date(),
              completed: false,
            },
          }),
        ),
    ),
    errors,
  };
};
