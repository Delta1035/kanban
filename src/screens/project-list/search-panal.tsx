import React, { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { Param, User } from "./type";
const apiUrl = process.env.REACT_APP_API_URL;
export default function SearchPanal({
  param,
  setParam,
  users,
}: {
  param: Param;
  setParam: Dispatch<SetStateAction<Param>>;
  users: User[];
}) {
  return (
    <form action="">
      <input
        type="text"
        value={param.name}
        onChange={(evt) =>
          setParam({
            ...param,
            name: evt.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value,
          })
        }
      >
        <option value="">负责人</option>
        {users.map((user, index) => {
          return (
            <option key={index} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
}
