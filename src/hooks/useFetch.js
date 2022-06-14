import { useState, useEffect } from "react";

const useFetch = (API) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw Error(`couldn't fetch data`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(error.message);
        }
      });
    return () => abortCont.abort();
  }, [API]);

  return { data, isPending, error };
};

export default useFetch;
