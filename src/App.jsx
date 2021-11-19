import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncAdd, syncAdd } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  const bugAdd = useCallback(() => {
    dispatch(asyncAdd());
  });
  const safeAdd = useCallback(() => {
    dispatch(syncAdd());
  });
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={bugAdd}>bugAdd</button>
      <button onClick={safeAdd}>safeAdd</button>
    </div>
  );
}
