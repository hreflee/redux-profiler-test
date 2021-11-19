import { delayPromise } from "./utils";

export const syncAdd = () => ({
  type: "ADD"
});

export const asyncAdd = () => (dispatch, getState) => {
  return delayPromise().then(() => dispatch(syncAdd()));
};
