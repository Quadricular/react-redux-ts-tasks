import { combineReducers } from 'redux';

import { tasksReducer } from './tasksReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  visibilityFilter: visibilityFilterReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
