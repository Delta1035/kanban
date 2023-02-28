/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-25 21:50:47
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 14:00:32
 * @FilePath: \kanban\src\screens\project-list\type.d.ts
 * @Description:
 *
 */
export interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export interface ListProps {
  list: Project[];
  users: User[];
}
export type Project = {
  name: string;
  personId: number;
  id: string;
  pin: boolean;
  organization: string;
};
export type User = {
  name: string;
  id: number;
  email: string;
  title: string;
  organization: string;
};

export type Param = {
  name: string;
  personId: string;
};
