import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount, zera } from "./store/counterSlice";
import type { RootState, AppDispatch } from "./store/index";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Contador: {count}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => dispatch(zera())}>0</button>

          <button onClick={() => dispatch(decrement())}>-1</button>
          <button onClick={() => dispatch(increment())}>+1</button>

          <button onClick={() => dispatch(incrementByAmount(-5))}>-5</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
      </div>
    </>
  );
}

export default App;
