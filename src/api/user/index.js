import request from 'superagent';

function getUser() {
  return request
    .get('https://mysterious-plains-40083.herokuapp.com/api/user')
    .then(({ body: { age, name }}) => {
      return { age, name };
    });
}

export default getUser;
