/* eslint-disable @typescript-eslint/ban-types */
import {
  createServer,
  Factory,
  Model,
  Registry,
  Response,
  Server,
  //  ActiveModelSerializer
} from 'miragejs';
import faker from 'faker';
import { Task } from '../models/task';
import { v4 as uuidv4 } from 'uuid';
import { Assign, ModelDefinition } from 'miragejs/-types';

export function makeServer(): Server<
  Registry<
    {
      task: ModelDefinition<Assign<{}, Partial<Task>>>;
    },
    {}
  >
> {
  const server = createServer({
    models: {
      task: Model.extend<Partial<Task>>({}),
    },

    factories: {
      task: Factory.extend({
        id() {
          return uuidv4();
        },
        name() {
          return faker.lorem.sentence();
        },
        description() {
          return faker.lorem.paragraph();
        },
        created() {
          return faker.date.recent();
        },
        deadline() {
          return faker.date.soon();
        },
        completed() {
          return Math.random() < 0.5;
        },
      }),
    },

    seeds(server) {
      server.createList('task', 15);
    },

    routes() {
      this.namespace = 'api';
      // hold 700ms as delay
      this.timing = 750;

      this.get('/tasks', function (schema) {
        const total = schema.all('task').length;
        const tasks: Task[] = schema.all('task').models;

        return new Response(200, { 'x-total-count': String(total) }, tasks);
      });

      this.get('/tasks/:id');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.post('/tasks', (schema: any, request) => {
        const attrs = JSON.parse(request.requestBody);
        console.log(attrs);
        schema.tasks.create(attrs);
        return new Response(200, {}, attrs);
      });

      this.patch('/tasks/:id', (schema, request) => {
        const task: Task = JSON.parse(request.requestBody);
        schema.db.tasks.update(task.id, task);
        return new Response(200, {}, task);
      });

      // reset the global namespace
      this.namespace = '';
      this.passthrough('http://localhost:5000/**');
    },
  });

  return server;
}
