/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-24 23:59:11
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 14:36:17
 * @FilePath: \kanban\src\screens\project-list\index.tsx
 * @Description:
 *
 */
import Search from "pages/panel/Search";
import { useEffect, useState } from "react";
import List from "./list";
import SearchPanal from "./search-panal";
import { Project, User } from "./type";
import * as qs from "qs";
import { cleanobject } from "utils/cleanObject";
import { useMount } from "utils/useMount";
import { useDeounce } from "utils/useDebounce";
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [list, setList] = useState<Array<Project>>([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDeounce(param, 200);

  useEffect(() => {
    console.log("param :>> ", param);

    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanobject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam]);

  const [users, setUsers] = useState<Array<User>>([]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
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
