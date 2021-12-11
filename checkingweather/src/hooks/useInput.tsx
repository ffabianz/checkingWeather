import { useState, ChangeEvent } from "react";

const useInput = (validateValue: Function) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setisTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
  };
};

export default useInput;
