import { useState, useEffect } from 'react';

/**
 * To makes sure that the code is only triggered once per user input and send the request then
 * @param: value: string, delay: microseconds
 * @returns debouncedValue
 */
export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
