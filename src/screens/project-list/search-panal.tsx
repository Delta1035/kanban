/*
 * @Author: delta 528491526@qq.com
 * @Date: 2023-02-25 00:01:06
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 14:08:18
 * @FilePath: \kanban\src\screens\project-list\search-panal.tsx
 * @Description:
 *
 */
import { SearchPanelProps } from "./type";
const apiUrl = process.env.REACT_APP_API_URL;
export default function SearchPanal({
  param,
  setParam,
  users,
}: SearchPanelProps) {
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
