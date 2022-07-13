import { useEventListener } from "../customHooks/useEventListener";

export const useClickAwayListener = (elementRef, callback, id) => {
  useEventListener(
    "click",
    (event) => {
      if (
        elementRef.current == null ||
        elementRef.current.contains(event.target) ||
        event.target.id === id
      ) {
        console.log(elementRef.current.contains(event.target));
        return;
      }
      console.log("useClickAwayListener > callback");
      callback(event);
    },
    document
  );
};
