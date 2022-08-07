import { useState } from "react";

const List = (props: { list: string[] }) => {
  const { list } = props;
  return (
    <>
      <ul>
        {list.map((li, index) => {
          return <li key={index}>{li}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
