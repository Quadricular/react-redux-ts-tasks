import { http, ApiResponse, headers } from './http';
import { taskURL } from '../config/api';
import { Task } from '../models/task';

class TasksService {
  async getTasks(
    args: RequestInit = { headers, method: 'get' },
  ): Promise<ApiResponse<Task[]>> {
    return await http<Task[]>(new Request(`${taskURL}`, args));
  }
  async get(
    id: string,
    args: RequestInit = { headers, method: 'get' },
  ): Promise<ApiResponse<Task>> {
    return await http<Task>(new Request(`${taskURL}/${id}`, args));
  }
  async update(
    id: string,
    body: Task,
    args: RequestInit = { headers, method: 'put', body: JSON.stringify(body) },
  ): Promise<ApiResponse<Task>> {
    return await http<Task>(new Request(`${taskURL}/:${id}`, args));
  }
  async create(
    body: Task,
    args: RequestInit = { headers, method: 'post', body: JSON.stringify(body) },
  ): Promise<ApiResponse<Task>> {
    return await http<Task>(new Request(`${taskURL}/products/`, args));
  }
  async delete(
    id: string,
    args: RequestInit = { headers, method: 'delete' },
  ): Promise<ApiResponse<Task>> {
    return await http<Task>(new Request(`${taskURL}/products/:${id}`, args));
  }
}

export default new TasksService();
