import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url).catch((e) => {
      setError(e)
      setIsLoading(false);
    });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
