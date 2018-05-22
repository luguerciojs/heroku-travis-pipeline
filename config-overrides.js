/* Override create-react-app without ejecting */
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  /* If necessary, you can pass an object as third param as config options for styled components */
  config = rewireStyledComponents(config, env);
  return config;
};
