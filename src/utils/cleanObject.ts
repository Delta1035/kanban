/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-26 13:20:40
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 14:41:49
 * @FilePath: \kanban\src\utils\cleanObject.ts
 * @Description:
 *
 */
export const isFalsy = (value: unknown): boolean =>
  value === 0 ? true : !!value;

export const cleanobject = (object: {
  [key in string | number | symbol]: unknown;
}) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    // 当value为0时也会是false,但是0是一个有效值不应该被过滤.
    if (!isFalsy(value)) {
      Reflect.deleteProperty(result, key);
    }
  });

  return result;
};
