import axios from 'axios';

export function peopleFetchData() {
  return (dispatch) => {
      dispatch(peopleIsLoading(true));
      axios.get('https://swapi.co/api/people/')
          .then((response) => {
              const results = response.data.results;
              dispatch(peopleIsLoading(false));
              dispatch(peopleFetchDataSuccess(results))
          })
          .catch(() => dispatch(peopleHasErrored(true)));
  };
}

export function peopleHasErrored(bool) {
  return {
      type: 'PEOPLE_HAS_ERRORED',
      hasErrored: bool
  };
}

export function peopleIsLoading(bool) {
  return {
      type: 'PEOPLE_IS_LOADING',
      isLoading: bool
  };
}

export function peopleFetchDataSuccess(people) {
  return {
      type: 'PEOPLE_FETCH_DATA_SUCCESS',
      people
  };
}