export const isFalsy = (value: any) => (value === 0 ? true : !!value);

export const cleanobject = (object: {
  [key in string | number | symbol]: any;
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
