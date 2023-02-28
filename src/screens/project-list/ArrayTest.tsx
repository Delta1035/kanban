import React from "react";
import { useArray } from "utils/useArray";
import { useMount } from "utils/useMount";
export type Person = {
  name: string;
  age: number;
};
export default function ArrayTest() {
  const persons: Person[] = [
    {
      name: "jack",
      age: 12,
    },
    {
      name: "ma",
      age: 13,
    },
  ];

  const { value, add, removeIndex, clear } = useArray(persons);

  useMount(() => {
    add({ name: "david", age: 12 });
  });
  return (
    <div>
      <p>
        <button onClick={() => add({ name: "david", age: 12 })}>add</button>
        <button onClick={() => removeIndex(value.length - 1)}>
          removeIndex
        </button>
        <button onClick={() => clear()}>clear</button>
      </p>
      {value.map((person, index) => {
        return <p key={index}>{index + person.name}</p>;
      })}
    </div>
  );
}
