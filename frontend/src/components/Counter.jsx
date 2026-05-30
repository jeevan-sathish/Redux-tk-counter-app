import Button from "./Button";
import { increment, decrement, reset } from "../reduxState/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  function incrementCount() {
    return dispatch(increment());
  }

  function decrementCount() {
    return dispatch(decrement());
  }

  function resetCount() {
    return dispatch(reset());
  }
  return (
    <div className="w-[40%] h-[60%] bg-white text-black shadow-md flex flex-col gap-3 justify-center items-center rounded-2xl shadow-blue-400">
      <h1 className="font-bold text-[30px] mb-[50px] text-amber-800">
        Redux Counter App
      </h1>
      <div className="w-[60%] h-[30%] bg-blue-400 flex justify-center items-center">
        <p className="text-[40px] font-bold text-black">{count}</p>
      </div>
      <div className="w-full p-4 flex flex-row justify-center items-center gap-4">
        <Button action="Increment" onClick={incrementCount} />
        <Button action="Decrement" onClick={decrementCount} />
        <Button action="Reset" onClick={resetCount} />
      </div>
    </div>
  );
};

export default Counter;
