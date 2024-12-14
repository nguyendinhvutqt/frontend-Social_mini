import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import axiosInstance from "../utils/axios";

interface UseAxiosReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useAxios<T = unknown>(config: AxiosRequestConfig): UseAxiosReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Reset loading state for every new request
      try {
        const res: AxiosResponse<T> = await axiosInstance(config);
        setData(res.data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [config]);

  return { data, loading, error };
}

export default useAxios;
