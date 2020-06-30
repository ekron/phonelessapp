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
  /**
   * This adds a `mouseup` listener to the document and *ignores*
   * all events with targets inside the `elementToClickOutsideOf`.
   */
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        elementToClickOutsideOf.current &&
        elementToClickOutsideOf.current.contains(event.target)
      ) {
        return;
      }
      onClickedOutsideElement();
    };
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [elementToClickOutsideOf, onClickedOutsideElement]);
};
