import { useState } from "react";
import { useEventListener } from "./useEventListener";

export const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEventListener("online", () => setStatus(navigator.onLine));
  useEventListener("offline", () => setStatus(navigator.onLine));

  return status;
};
