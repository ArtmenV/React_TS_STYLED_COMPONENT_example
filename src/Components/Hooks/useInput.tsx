import React, { useState } from "react";

const useInput = (initialState: any) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, onChange };
};

export default useInput;
