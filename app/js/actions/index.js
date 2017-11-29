import { GET_SITES } from '../constants';
import config from '../../../config';

const setSites = sitesArr => ({
  type: GET_SITES,
  sites: sitesArr
})

export const getSites = () => dispatch => (
    fetch(`${config.url}get`)
    .then(rjson => rjson.json())
    .then(res => dispatch(setSites(res.sites)))
    .catch(err => console.error(err))
  )

