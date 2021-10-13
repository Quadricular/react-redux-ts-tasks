import { useState, useEffect, BaseSyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Task, TaskErrors, taskSchema } from '../models/task';
import { addTaskAction, editTaskAction } from '../store/actions/tasksActions';
import { RootState } from '../store/reducers';
import { getVisibleTasks } from './filterHooks';

export interface FormTypes<T, E> {
  add: boolean;
  register: UseFormRegister<T>;
  submitting: boolean;
  handleSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  errors: E;
  currentData?: Task;
}

export const useGetVisibleTasks = (): Task[] => {
  return useSelector((state: RootState) =>
    getVisibleTasks(state.tasks, state.visibilityFilter),
  );
};

export const useAddTask = (): FormTypes<Task, TaskErrors> => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Task>({ resolver: yupResolver(taskSchema) });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!errors?.name && isSubmitted) {
      setSubmitting(true);
    } else {
      setSubmitting(false);
    }
  }, [errors, isSubmitted]);

  return {
    add: true,
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

export const useEditTask = (): FormTypes<Task, TaskErrors> => {
  const dispatch = useDispatch();
  const currentTask = useSelector((state: RootState) => state.modal.currentTask);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<Task>({
    resolver: yupResolver(taskSchema),
    defaultValues: { ...currentTask },
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!errors?.name && isSubmitted) {
      setSubmitting(true);
    } else {
      setSubmitting(false);
    }
  }, [errors, isSubmitted]);

  return {
    currentData: currentTask,
    add: false,
    register,
    submitting,
    handleSubmit: handleSubmit(
      (data: Task) =>
        currentTask &&
        data &&
        dispatch(
          editTaskAction({
            id: currentTask.id,
            data: {
              id: currentTask.id,
              name: data.name,
              description: 'Lorem',
              deadline: new Date(),
              completed: currentTask.completed,
            },
          }),
        ),
    ),
    errors,
  };
};
