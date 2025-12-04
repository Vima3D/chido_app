import { useState } from "react";

export function usePasswordAuth() {
  const [authorized, setAuthorized] = useState(false);
  const correctPassword = import.meta.env.VITE_REPORT_PASSWORD;

  const validate = (input: string) => {
    if (input === correctPassword) {
      setAuthorized(true);
      return true;
    }
    return false;
  };

  return { authorized, validate };
}
