import { ServerError } from "@/utils/types";
import { useState } from "react";

export const useFetch = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ServerError | null>(null);

  const fetchData = async (url: string, options?: RequestInit) => {
    if (!url) return;
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const json: T = await response.json();
      if ((json as any).error) throw json;
      return json;
    } catch (err: unknown) {
      setError(err as ServerError);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetchData };
};
