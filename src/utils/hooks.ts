import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { start, stop } from "../store/slices/loadingSlice";

const useLoading = (isLoading: boolean, ...rest: boolean[]) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading || rest.includes(true)) {
      dispatch(start());
    } else {
      dispatch(stop());
    }
  }, [isLoading, dispatch, rest]);
};

export { useLoading };
