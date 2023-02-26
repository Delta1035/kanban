/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-24 23:59:11
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-26 13:37:23
 * @FilePath: \kanban\src\screens\project-list\index.tsx
 * @Description:
 *
 */
import Search from "pages/panel/Search";
import { useEffect, useState } from "react";
import List from "./list";
import SearchPanal from "./search-panal";
import { ListProject, User } from "./type";
import * as qs from "qs";
import { cleanobject } from "utils/cleanObject";
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState<Array<ListProject>>([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  useEffect(() => {
    console.log("param :>> ", param);

    fetch(`${apiUrl}/projects?${qs.stringify(cleanobject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);

  const [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanal
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanal>
      <List users={users} list={list}></List>
    </div>
  );
};
