import React, { memo } from "react";
import { useMeQuery } from "./APIHooks/useMeQuery";

/**
 * Dislays the current user's info -- name, phone number.
 */
export const Me: React.FC = memo(() => {
  const { result } = useMeQuery(undefined);
  return (
    <div>
      Hello {result?.data.me.name} - {result?.data.me.currentPhoneNumber.number}
    </div>
  );
});
