import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useForm, UseFormRegister, Control, UseFormHandleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Task, TaskErrors, taskSchema } from '../models/task';
import { addTaskAction, editTaskAction } from '../store/actions/tasksActions';
import { RootState } from '../store/reducers';
import { getVisibleTasks } from './filterHooks';
import { EditTaskRequest, AddTaskRequest } from '../store/types';

export interface FormTypes<T, E> {
  add: boolean;
  register: UseFormRegister<T>;
  submitting: boolean;
  onSubmit: (
    data: Task & { date: string },
  ) => AddTaskRequest | EditTaskRequest | undefined;
  errors: E;
  currentData?: Task;
  control: Control<Task>;
  handleSubmit: UseFormHandleSubmit<Task>;
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
    formState: { errors, isSubmitted },
    control,
    handleSubmit,
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
    control,
    handleSubmit,
    add: true,
    register,
    submitting,
    onSubmit: (data: Task & { date: string }) => {
      return (
        data &&
        dispatch(
          addTaskAction({
            data: {
              id: uuidv4(),
              name: data.name,
              description: data.description,
              deadline: data?.date && data?.date[0],
              completed: false,
            },
          }),
        )
      );
    },
    errors,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCurrentTask = () => {
  return useSelector((state: RootState) => state.modal.currentTask);
};

export const useEditTask = (): FormTypes<Task, TaskErrors> => {
  const dispatch = useDispatch();
  const currentTask = useCurrentTask();

  const {
    register,
    formState: { errors, isSubmitted },
    control,
    handleSubmit,
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
    control,
    handleSubmit,
    currentData: currentTask,
    add: false,
    register,
    submitting,
    onSubmit: (data: Task & { date: string }) => {
      return (
        currentTask &&
        data &&
        dispatch(
          editTaskAction({
            id: currentTask.id,
            data: {
              id: currentTask.id,
              name: data.name,
              description: data.description,
              deadline: new Date(data.date),
              completed: currentTask.completed,
            },
          }),
        )
      );
    },

    errors,
  };
};
