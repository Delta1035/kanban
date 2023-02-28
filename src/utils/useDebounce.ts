import { useEffect, useState } from "react";

/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-26 21:38:29
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 15:20:11
 * @FilePath: \kanban\src\utils\useDebounce.ts
 * @Description:
 *
 */
export const useDeounce = <T>(value: T, delay?: number) => {
  const [valueCache, setValueCache] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValueCache(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return valueCache;
};
