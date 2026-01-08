import { useState } from "react";

export const useFetch = <T>() => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url: string, options?: RequestInit) => {
    if (!url) return;
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const json: T = await response.json();
      if ((json as any).error) throw json;
      return json;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, fetchData };
};
