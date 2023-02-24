import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./pages/panel/Search";
import List from "./pages/panel/List";

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
      <Search
        ref={myRef}
        searchValue={searchValue}
        handleChange={handleChange}
      ></Search>
      <List list={list}></List>
    </div>
  );
}

export default App;
