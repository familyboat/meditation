## 关于项目

有一天，在路上走的时候，突然有个灵感，想把它记录下来。于是开始构思这样一款应用
应该是什么样子，拥有什么样的功能。

## 技术选型

- react。react项目写起来更顺手一些，所以底色是react。
- MUI。material设计风格我还挺喜欢的。
- react router dom。单页应用必备的路由解决方案。
- react intl。看名字就知道它是用来干什么的，对，国际化。

## 如何进行国际化

国际化目前仅支持简体中文和英文。

- 提取要翻译的文本。执行 npm run extract -- 'src/**/*.tsx' --out-file lang/en.json
- 将提取的英文文件复制到中文文件中，已经翻译过的部分保留下来。执行 npm run copy:lang
- 翻译结束后，需要进行编译。执行 npm run compile -- ./lang/en.json --ast --out-file compiled-lang/en.json 和 npm run compile -- ./lang/zh.json --ast --out-file compiled-lang/zh.json
