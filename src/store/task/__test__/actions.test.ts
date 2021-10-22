import * as actions from '../actions';
import { TaskTypes } from '../constants';
import faker from 'faker';

describe('Test Suite for Tasks Actions', () => {
  const mockID = faker.random.words();
  const taskMockData = {
    name: faker.lorem.sentence(),
    description: faker.lorem.sentences(),
    deadline: faker.date.soon(),
    completed: Math.random() < 0.5,
  };

  /* FETCH */
  it('should create action to fetch all tasks', () => {
    const expectedAction = {
      type: TaskTypes.LOAD_TASKS,
    };
    expect(actions.fetchTasksAction().type).equal(expectedAction.type);
  });

  /* ADD */
  it('should create action to use once all tasks have been fetched', () => {
    const expectedAction = {
      type: TaskTypes.TASKS_LOADED,
      data: { tasks: [{ _id: '34534', ...taskMockData }] },
    };
    expect(actions.fetchedTasksAction(expectedAction).type).equal(expectedAction.type);
  });

  /* TOGGLE */
  it('should create action to toggle a task', () => {
    const expectedAction = {
      completed: false,
      id: mockID,
    };
    expect(actions.toggleTaskAction(expectedAction).payload).equal(expectedAction);
  });

  /* ADD */
  it('should create an action to add a task', () => {
    const text = {
      data: taskMockData,
    };
    const expectedAction = {
      type: TaskTypes.ADD_TASK,
      payload: text,
    };
    expect(actions.addTaskAction(text).payload).equal(expectedAction.payload);
  });

  /* EDIT */

  it('should create an action to edit a task', () => {
    const text = {
      id: mockID,
      data: taskMockData,
    };
    const expectedAction = {
      type: TaskTypes.EDIT_TASK,
      payload: text,
    };
    expect(actions.editTaskAction(text).payload).equal(expectedAction.payload);
  });

  it('should create action to use once a task has been edited', () => {
    const expectedAction = {
      type: TaskTypes.TASK_EDITED,
      payload: { data: { task: { _id: '34534', ...taskMockData } } },
    };
    expect(actions.editedTaskAction(expectedAction.payload).payload.data).equal(
      expectedAction.payload.data,
    );
  });

  /* DELETE */

  it('should create an action to delete a task', () => {
    const text = {
      id: '0',
    };
    const expectedAction = {
      type: TaskTypes.DELETE_TASK,
      payload: text,
    };
    expect(actions.deleteTaskAction(text).payload).equal(expectedAction.payload);
  });

  it('should create action to use once a task has been deleted', () => {
    const expectedAction = {
      type: TaskTypes.TASK_DELETED,
      data: { task: { _id: '0' } },
    };
    expect(actions.deletedTaskAction(expectedAction).type).equal(expectedAction.type);
  });
});
