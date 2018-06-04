export function planetHasErrored(state = false, action) {
  switch (action.type) {
      case 'PLANET_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function planetIsLoading(state = false, action) {
  switch (action.type) {
      case 'PLANET_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export default function planet(state = [], action) {
  switch (action.type) {
      case 'PLANET_FETCH_DATA_SUCCESS':
          return action.planet;

      default:
          return state;
  }
}