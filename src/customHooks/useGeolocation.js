import { useEffect, useState } from "react";

export const useGeolocation = (options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const successHandler = (position) => {
      setLoading(false);
      setData(position.coords);
      setError(null);
    };

    const errorHandler = (error) => {
      setLoading(false);
      setError(error);
    };

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );

    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
};
