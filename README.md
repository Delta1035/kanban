### [Prettier](https://prettier.io/docs/en/install.html)

#### 安装

> npm install --save-dev --save-exact prettier

#### 配置文件.prettierrc.json\

告诉编辑器, 项目正在使用 prettier

> echo {}> .prettierrc.json

#### 创建格式化忽略文件.prettierignore

告诉编辑器,那些文件可以忽略

> \# Ignore artifacts:
>
> build
>
> coverage
>
> src/\*

#### 命令行格式化文件

> npx prettier --write .
>
> 根据 package.json

##### 记录使用 prettier 格式化遇到的问题

1. 文件编码格式不是 utf-8 而是 utf-16 导致 prettier 格式化报错的问题(从网上复制来的文本,格式是 utf-16)

#### 避免与 eslint 的冲突

如果您使用 ESLint，请安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)，以使 ESLint 和 Prettier 彼此相处融洽。它将关闭所有不必要的 ESLint 规则或可能与 Prettier 冲突的规则。Stylelint 也有类似的配置：[stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

> npm install --save-dev eslint-config-prettier

#### CI

> 在 CI 中运行以确保项目保持格式化。
>
> prettier --check .

### ESlint

执行脚本

> npx eslint .

### [commitlint](https://github.com/conventional-changelog/commitlint)

`yarn add @commitlint/{config-conventional,cli} -D `
