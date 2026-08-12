import { useState, useEffect } from 'react';

function useNumberStorage(key: string, initialValue: number): [number, (val: number) => void] {
  const [value, setValue] = useState<number>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useNumberStorage