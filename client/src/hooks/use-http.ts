import { useCallback, useEffect, useReducer } from "react";

enum HttpAction {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

type StateType<T> = {
  isLoading: boolean;
  error?: Error;
  data?: T;
};

type ActionType<T> =
  | { type: HttpAction.LOADING }
  | { type: HttpAction.SUCCESS; payload: T }
  | { type: HttpAction.ERROR; payload: Error };

const useHttp = <T = unknown>(
  url: string,
  method?: string,
  body?: any,
  headers?: any
) => {
  const initialState: StateType<T> = {
    isLoading: false,
    error: undefined,
    data: undefined,
  };

  const httpReducer = (
    state: StateType<T>,
    action: ActionType<T>
  ): StateType<T> => {
    const { type } = action;
    switch (type) {
      case HttpAction.LOADING:
        return { ...state, isLoading: true, error: undefined };
      case HttpAction.SUCCESS:
        return { ...state, isLoading: false, data: action.payload };
      case HttpAction.ERROR:
        return { ...state, isLoading: false, error: action.payload };
      default:
        // return state
        throw new Error("Should never happen");
    }
  };

  const [{ isLoading, error, data }, dispatch] = useReducer(
    httpReducer,
    initialState
  );

  const sendRequest = useCallback(
    async (url: string, method?: string, body?: any, headers?: any) => {
      try {
        dispatch({ type: HttpAction.LOADING });
        const response = await fetch(url, {
          method: method ?? "GET",
          body,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        dispatch({ type: HttpAction.SUCCESS, payload: json });
      } catch (error: any) {
        dispatch({ type: HttpAction.ERROR, payload: error });
      }
    },
    []
  );

  useEffect(() => {
    sendRequest(url, method, body, headers).catch((e) => {
      dispatch({ type: HttpAction.ERROR, payload: e });
    });
  }, [body, headers, method, sendRequest, url]);

  return { isLoading, error, data };
};

export default useHttp;
