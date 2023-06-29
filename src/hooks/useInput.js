import { useCallback, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setValueDefalut = useCallback(() => {
    setValue("");
  }, []);

  return [value, onChange, setValueDefalut];
};
export default useInput;
