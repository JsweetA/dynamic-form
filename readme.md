#### 当前任务

学习package.json中dependencies和devDependencies

#### 待完成任务

- [+] 增加eslint规则
- [ ] 兼容naiveui
- [ ] 兼容tmui
- [ ] 打包优化

#### 各个工具的作用

+ eslint：用于检查代码规范，不规范则进行报错，可自行配置添加规则
+ prettier：用于格式化代码，建立统一的代码风格
+ onchange：用于辅助prettier，从而实现自动格式化代码的功能，也就是Alt + Shift + F
+ husky：用于创建git hooks，比如创建一个pre-commit hook，在提交代码前利用hook进行检查代码规范，若不符合则直接终止
+ lint-staged：仅对变更的文件执行相关操作，也就是针对变更文件执行eslint检查

#### 工程化工具文档链接

1. 查阅eslint文档 https://eslint.org/docs/latest/use/command-line-interface 了解cli工具的options，查阅文档 https://eslint.org/docs/latest/use/configure/ignore 了解eslint默认忽略的文件
2. 查阅链接https://prettier.io/docs/en/options了解prettier各项配置
3. 查阅prettier文档 https://prettier.io/docs/en/cli 了解cli工具的options, 查询链接https://prettier.io/docs/en/watching-files, https://www.npmjs.com/package/onchange 获取onchange文档，
4. eslint和prettier协同工作的相关文档文章链接 https://prettier.io/docs/en/comparison，https://prettier.io/docs/en/integrating-with-linters，https://khalilstemmler.com/blogs/tooling/prettier/
5. 与prettier插件有冲突的两个eslint核心规则的issue https://github.com/prettier/eslint-plugin-prettier/blob/master/README.md#arrow-body-style-and-prefer-arrow-callback-issue
6. husky文档 https://typicode.github.io/husky/
7. lint-staged文档 https://www.npmjs.com/package/lint-staged
8. commitint 文档 https://commitlint.js.org/#/，https://commitlint.js.org/#/guides-local-setup?id=install-commitlint
9. commitizen和cz-conventional-changelog文档 https://www.npmjs.com/package/commitizen，https://www.npmjs.com/package/cz-conventional-changelog