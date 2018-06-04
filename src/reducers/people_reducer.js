export function peopleHasErrored(state = false, action) {
  switch (action.type) {
      case 'PEOPLE_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function peopleIsLoading(state = false, action) {
  switch (action.type) {
      case 'PEOPLE_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export default function people(state = [], action) {
  switch (action.type) {
      case 'PEOPLE_FETCH_DATA_SUCCESS':
          return action.people;

      default:
          return state;
  }
}