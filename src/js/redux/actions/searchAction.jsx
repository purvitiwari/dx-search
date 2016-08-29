import request from 'superagent';
const apiQuery  = require('../../../../config/apiConfig.js');

export function search(str) {
  return dispatch => {
    request
      .get('http://' + apiQuery.host + ':' + apiQuery.port + '/dxsearch')
      .query({city: str.city})
      .query({area: str.area})
      .query({test: str.test})
      .end((error, response) => {
        const data = JSON.parse(response.text);
        // console.log(data.result);
        dispatch({ type: 'UPDATE', payload: data.result});
      });
  };
}
