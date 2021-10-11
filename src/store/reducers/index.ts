import { combineReducers } from 'redux';

import { tasksReducer } from './tasksReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  visibilityFilter: visibilityFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
