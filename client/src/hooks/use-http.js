import { useCallback } from "react";
import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const requestHandler = useCallback(async function (requestConfig, applyData) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      if (applyData) {
        applyData(data);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return { isLoading: isLoading, error: error, requestHandler: requestHandler };
};
export default useHttp;
