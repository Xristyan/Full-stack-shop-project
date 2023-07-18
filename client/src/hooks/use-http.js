import { useCallback } from "react";
import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const requestHandler = useCallback(async function (requestConfig, applyData) {
    setIsLoading(true);
    setError(null);
    console.log("suiiiiiiiiiiiiiiiiiii");
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      if (applyData) {
        applyData(data);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
      console.log(err);
    }
    setIsLoading(false);
  }, []);
  return { isLoading: isLoading, error: error, requestHandler: requestHandler };
};
export default useHttp;
