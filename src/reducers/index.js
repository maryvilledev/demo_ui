import { combineReducers } from 'redux'
import players from './playerReducers'

const reducers = combineReducers({
  players
});

export default reducers;
