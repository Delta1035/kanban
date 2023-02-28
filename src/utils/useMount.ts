/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-26 13:46:36
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 14:06:38
 * @FilePath: \kanban\src\utils\useMount.ts
 * @Description:
 *
 */
import { useEffect } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
