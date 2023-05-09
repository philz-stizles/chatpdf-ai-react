import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  return { isTouched, isValid, value };
};

export default useInput;
