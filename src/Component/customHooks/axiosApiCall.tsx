import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface AxiosModule {
  url: string;
  config?: AxiosRequestConfig; // Use AxiosRequestConfig for proper type definition
}

const useAxios = ({ url, config = {} }: AxiosModule) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios({ url, ...config });
        setData(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "An error occurred");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (url) {
      getData();
    }
  }, [url]);

  return { data, isLoading, error };
};

export default useAxios;
