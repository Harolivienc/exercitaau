function debounce(func, delay, immediate = false) {
  let timeoutId;

  return function(...args) {
    const context = this;
    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, delay);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
