const FETCH_DATA = 'fetch_data';


export const fetchData = () => (dispatch, getState, api) => {
  const res = {};

  dispatch({
    type: FETCH_DATA,
    payload: res
  })
}