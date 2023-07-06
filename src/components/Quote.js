import React, { useEffect, useState } from 'react';

function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'KgdctuCDA+3eWnazYFlg0A==APQxUuKIIG5IDuJp',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        const { quote, author } = data[0];

        setQuoteData({ quote, author });
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2>Quote of the Day</h2>
      <p>{quoteData.quote}</p>
      <p>
        -
        {quoteData.author}
      </p>
    </div>
  );
}

export default Quote;
