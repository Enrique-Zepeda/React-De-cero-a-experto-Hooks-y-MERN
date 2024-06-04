import { useEffect, useState } from "react";

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });
  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    setLoadingState();
    const resp = await fetch(url);
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }
    const data = await resp.json();
    console.log({ data });
    setState({ data: data, isLoading: false, hasError: false, error: null });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
}
