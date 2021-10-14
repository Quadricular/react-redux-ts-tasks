import { combineReducers } from 'redux';

import { tasksReducer } from './tasksReducer';
import { filterReducer } from './filterReducer';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
