import axios from 'axios';

export function planetFetchData() {
  return (dispatch) => {
      dispatch(planetIsLoading(true));
      axios.get('https://swapi.co/api/planets/')
          .then((response) => {
              const results = response.data.results;
              dispatch(planetIsLoading(false));
              dispatch(planetFetchDataSuccess(results))
          })
          .catch(() => dispatch(planetHasErrored(true)));
  };
}

export function planetHasErrored(bool) {
  return {
      type: 'PLANET_HAS_ERRORED',
      hasErrored: bool
  };
}

export function planetIsLoading(bool) {
  return {
      type: 'PLANET_IS_LOADING',
      isLoading: bool
  };
}

export function planetFetchDataSuccess(planet) {
  return {
      type: 'PLANET_FETCH_DATA_SUCCESS',
      planet
  };
}