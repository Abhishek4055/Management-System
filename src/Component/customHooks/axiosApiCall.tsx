import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface AxiosModule {
  url: string;
  config?: AxiosRequestConfig;
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
        // console.log(err?.response?.data?.message);
        setError("An  error occurred");
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
