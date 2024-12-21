import axios from "axios";
import { useEffect, useState } from "react";

interface AxiosModule {
  url: string;
  method: string;
  header?: any;
  body?: any;
}

const useAxiosAPICall = ({
  url,
  method,
  header = null,
  body = null,
}: AxiosModule) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log(url);
  const getData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios[method](url, header, body);
      console.log("Response", response);
      if (response.status == 200) {
        setIsLoading(false);
        setData(response?.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [method, url, body, header]);
  return { data, isLoading, error };
};

export default useAxiosAPICall;
