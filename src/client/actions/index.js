import Pokedex from 'pokedex-promise-v2'
const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);
const FETCH_DATA = 'fetch_data';


export const fetchData = () => (dispatch, getState, api) => {
  const res = {};

  dispatch({
    type: FETCH_DATAS,
    payload: res
  })
}

export const getPokemonByName = (name) => async (dispatch, getState) => {
  const res = await P.getPokemonByName(name)
  console.log(res)
  dispatch({
    type: FETCH_DATA,
    payload: res
  })
}