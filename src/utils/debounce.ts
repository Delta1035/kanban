/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-26 13:57:29
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-26 20:12:17
 * @FilePath: \kanban\src\utils\debounce.ts
 * @Description:
 *
 */

export const debounce = (func: () => any, delay: number) => {
  let timer: number;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      func();
    }, delay);
  };
};
