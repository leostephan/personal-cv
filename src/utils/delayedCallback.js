const delayedCallback = (fn, timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, timeout);
  });

export default delayedCallback;
