import { getQuote } from 'inspirational-quotes';

// Lambda handler. We are using an async function to simplify the code and
// remove the need to use a callback.
export const getQuoteHandler = async function getQuoteHandler() {
  const quote = getQuote();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      quote: quote.text,
      author: quote.author,
    }),
  };

  return response;
};

export default getQuoteHandler;
