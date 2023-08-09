/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';

export default (initVal = null) => {
  const [value, setValue] = useState(initVal);

  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setValue({
        ...value,
        [name]: value,
      });
    },
    [value]
  );

  return [value, handler];
};
