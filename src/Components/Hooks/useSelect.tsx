import React, { useState } from "react";

const useSelect = (initialState: any) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, onChange };
};
export default useSelect;
