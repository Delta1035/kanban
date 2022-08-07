import { useEffect } from "react";

export const useMount = (callback: () => any) => {
  useEffect(() => {
    callback();
  });
};
