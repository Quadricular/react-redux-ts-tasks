import { http, ApiResponse, headers } from './http';
import { taskURL } from '../config/api';
import { Task } from '../models/task';

class TasksService<T> {
  async getTasks(
    args: RequestInit = { headers, method: 'get' },
  ): Promise<ApiResponse<T[]>> {
    return await http<T[]>(new Request(`${taskURL}`, args));
  }
  async get(
    id: string,
    args: RequestInit = { headers, method: 'get' },
  ): Promise<ApiResponse<T>> {
    return await http<T>(new Request(`${taskURL}/${id}`, args));
  }
  async update(
    id: string,
    body: Task | { completed: boolean },
    args: RequestInit = { headers, method: 'put', body: JSON.stringify(body) },
  ): Promise<ApiResponse<T>> {
    return await http<T>(new Request(`${taskURL}/${id}`, args));
  }

  async create(
    body: Omit<Task, '_id' | 'deadline'> & { deadline: Date | string },
    args: RequestInit = { headers, method: 'post', body: JSON.stringify(body) },
  ): Promise<ApiResponse<T>> {
    return await http<T>(new Request(`${taskURL}`, args));
  }
  async delete(
    id: string,
    args: RequestInit = { headers, method: 'delete' },
  ): Promise<ApiResponse<T>> {
    return await http<T>(new Request(`${taskURL}/${id}`, args));
  }
}

export default new TasksService<Task>();
