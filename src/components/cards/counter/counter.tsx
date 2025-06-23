import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/slices/counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter.value);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>{counter}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
