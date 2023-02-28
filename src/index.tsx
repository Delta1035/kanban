/*
 * @Author: delta 528491526@qq.com
 * @Date: 2022-08-06 16:40:06
 * @LastEditors: delta 528491526@qq.com
 * @LastEditTime: 2023-02-28 17:34:48
 * @FilePath: \kanban\src\index.tsx
 * @Description:
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
loadDevTools(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
