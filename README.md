### [Prettier](https://prettier.io/docs/en/install.html)

#### 安装

> npm install --save-dev --save-exact prettier

#### 配置文件.prettierrc.json

> echo {}> .prettierrc.json

#### 创建格式化忽略文件.prettierignore

> \# Ignore artifacts:
>
> build
>
> coverage

#### 命令行格式化文件

> npx prettier --write .

#### 记录使用 prettier 遇到的问题

1. 文件编码格式不是 utf-8 而是 utf-16 导致 prettier 格式化报错的问题(从网上复制来的文本,格式是 utf-16)

### `commitlint`

`yarn add @commitlint/{config-conventional,cli} -D `
