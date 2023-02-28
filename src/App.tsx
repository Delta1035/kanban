/*
 * @Author: delta 528491526@qq.com
 * @Date: 2022-08-07 01:56:34
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 17:32:15
 * @FilePath: \kanban\src\App.tsx
 * @Description:
 *
 */
import React, { useState } from "react";
import "./App.css";
import { LoginScreen } from "screens/login";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([
    "张三123",
    "李四223",
    "张三334",
    "李四356",
  ]);

  const myRef = React.createRef();

  const handleChange = (e: any) => {
    console.log(e);
    setSearchValue(e.target.value);
    const newList = list.filter((item) => item.includes(searchValue));
    setList(newList);
  };
  return (
    <div className="App">
      {/* <Search
        ref={myRef}
        searchValue={searchValue}
        handleChange={handleChange}
      ></Search>
      <List list={list}></List> */}
      {/* <ProjectListScreen></ProjectListScreen> */}
      {/* <ArrayTest></ArrayTest> */}
      <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
