import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = () => {
  const [value, setValue] = useState();
  const [success, setSuccess] = useState();

  const copyToClipBoard = (text, options) => {
    const result = copy(text, options);

    if (result) setValue(text);

    setSuccess(result);
  };
  return [copyToClipBoard, { success }];
};
