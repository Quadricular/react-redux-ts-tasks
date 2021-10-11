export interface Task {
  id: string;
  name: string;
  description: string;
  created?: Date;
  deadline: Date;
  completed: boolean;
}
