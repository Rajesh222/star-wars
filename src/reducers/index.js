import { combineReducers } from 'redux';
import people_reducer from './people_reducer';
import { peopleIsLoading } from './people_reducer';
import planet_reducer from './planet_reducer';
import { planetIsLoading } from './planet_reducer';
const rootReducer = combineReducers({
  people: people_reducer,
  peopleIsLoading: peopleIsLoading,
  planet: planet_reducer,
  planetIsLoading: planetIsLoading

});

export default rootReducer;
