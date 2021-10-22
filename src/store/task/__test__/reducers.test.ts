import { tasksReducer } from '../reducers';
import { TaskTypes } from '../constants';

describe('Tasks reducer unit tests', () => {
  it('should return empty array when initial state and action is undefined', () => {
    expect(tasksReducer(undefined, { type: TaskTypes.LOAD_TASKS }).tasks).lengthOf(0);
  });
});
