import { GET_SITES, REMOVE_SITE } from '../constants';

const initialState = [

]

export default (state = initialState, action) => {
  switch (action.type) {

  case GET_SITES:
   return [...action.sites];
   
  default:
    return state
  }
}
