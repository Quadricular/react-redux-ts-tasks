import { combineReducers } from 'redux';

import { tasksReducer } from './task/reducers';
import { filterReducer } from './filter/reducers';
import { modalReducer } from './modal/reducers';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filterReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
