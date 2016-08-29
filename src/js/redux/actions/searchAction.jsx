import request from 'superagent';

export function search(str) {
  return dispatch => {
    request
      .get('http://localhost:3000/dxsearch')
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
