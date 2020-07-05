import { useEffect, RefObject } from "react";

/**
 * If you click/tap on *any* node *outside* `elementToClickOutsideOf`
 * *then* this will call `onClickedOutsideElement`.
 */
export const useOnClickOutside = ({
  elementToClickOutsideOf,
  onClickedOutsideElement,
}: {
  elementToClickOutsideOf: RefObject<any>;
  onClickedOutsideElement: () => void;
}) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // With any tap/click on the document ...
      if (
        elementToClickOutsideOf.current &&
        elementToClickOutsideOf.current.contains(event.target)
      ) {
        // If the target is contained inside the `elementToClickOutsideOf`...
        return;
      }
      // ... we clicked outside the `elementToClickOutsideOf`, so:
      onClickedOutsideElement();
    };
    // Add mouseup listener to *entire* document ...
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [elementToClickOutsideOf, onClickedOutsideElement]);
};
