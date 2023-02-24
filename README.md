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

> npx prettier --write . (注意后面的 . 表示格式化当前文件夹)
>
> 根据 package.json

##### 记录使用 prettier 格式化遇到的问题

1. 文件编码格式不是 utf-8 而是 utf-16 导致 prettier 格式化报错的问题(从网上复制来的文本,格式是 utf-16)

#### pre-commit hook

安装完后会在项目根目录生成.husky 文件夹

在每次代码提交之前自动格式化

新版本每次 commit 之前执行格式化

```shell
npx mrm@2 lint-staged
```

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

安装 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)

`npm i -D eslint-config-prettier`

然后

```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "prettier" // 覆盖eslint部分规则避免冲突
    ]
  },
```

### [commitlint](https://github.com/conventional-changelog/commitlint)

每次 commit 的时候检查 commit msg 是否符合规范

`npm install -g @commitlint/cli @commitlint/config-conventional`

安装全局 commitlint 之后可以测试会否成功:

```shell
echo "chore" | commitlint
⧗   input: chore
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

# 正确格式:
 echo "chore: 增加了commitlint全局包" | commitlint
```

`yarn add @commitlint/{config-conventional,cli} -D`

将 commit 加入到 husky

`npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'`
