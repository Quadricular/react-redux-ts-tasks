import * as yup from 'yup';
import { FieldError } from 'react-hook-form';

export interface Task {
  id: string;
  name: string;
  description: string;
  created: Date;
  deadline: Date;
  completed: boolean;
}

export interface TaskErrors {
  name?: FieldError | undefined;
  description?: FieldError | undefined;
  deadline?: FieldError | undefined;
  completed?: FieldError | undefined;
}

export const taskSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  deadline: yup.date(),
  completed: yup.boolean(),
});
