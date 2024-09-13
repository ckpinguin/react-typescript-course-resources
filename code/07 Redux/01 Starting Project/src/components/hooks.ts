import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { AppDispatch, type RootState } from "../store/store";

// The recommended way: Use own (better typed) version of dispatch
// for redux when using typescript
type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
