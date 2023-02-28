/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-25 00:00:28
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-25 22:48:39
 * @FilePath: \kanban\src\screens\project-list\list.tsx
 * @Description:
 *
 */

import React from "react";
import { ListProps, Project, User } from "./type";

export default function List({ list, users }: ListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project, index) => {
          return (
            <tr key={index}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => {
                  return user.id === project.personId;
                })?.name || "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
