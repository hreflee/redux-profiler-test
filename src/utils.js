export const delayPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10);
  });
