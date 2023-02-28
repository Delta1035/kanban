/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-28 15:27:39
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 16:12:18
 * @FilePath: \kanban\src\utils\useArray.ts
 * @Description:
 *
 */
import { useEffect, useState } from "react";

export const useArray = <T>(arr: T[]) => {
  const [value, setValuey] = useState(arr);
  const add = (a: T) => {
    setValuey([...value, a]);
  };
  const removeIndex = (i: number) => {
    const copy = [...value];
    copy.splice(i, 1);
    setValuey([...copy]);
  };
  const clear = () => {
    // setValuey(value.splice(0,value.length))
    setValuey([]);
  };
  return { value, add, removeIndex, clear };
};
