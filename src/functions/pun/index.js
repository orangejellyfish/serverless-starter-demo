import { random as getPun } from 'devpun';

// Lambda handler. We are using an async function to simplify the code and
// remove the need to use a callback.
export const getPunHandler = async function getPunHandler() {
  const pun = getPun();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      pun,
    }),
  };

  return response;
};

export default getPunHandler;
