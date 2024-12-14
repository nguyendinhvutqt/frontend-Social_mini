import { useEffect, useState } from "react";

const useDebound = (search: string, delay: number) => {
  const [deboundValue, setDeboundValue] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboundValue(search);
    }, delay);

    return () => clearTimeout(handler);
  }, [search, delay]);

  return deboundValue;
};

export default useDebound;
