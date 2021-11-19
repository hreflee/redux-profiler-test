import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileStore from "redux-profiler";

function counter(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
}

const storeFactory = () =>
  createStore(counter, 0, compose(profileStore(), applyMiddleware(thunk)));

export default storeFactory;
