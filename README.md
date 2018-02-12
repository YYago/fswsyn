# @yyago/node-modules-custom

Node.js modules 自定义改装。

**下载使用须知**: 这个npm package 似乎没有什么普遍适用性，一般自用，如果使用到你自己的项目中，请自己审查代码是否适合，避免造成的损失！！！

## APIs

### 1、 .fswfSync( filePath, data, isReplaceAndCover )

`fs.writeFileSync()` 的免报错改进。

 *  `filePath`:  文件路径.
 *  `data`:  内容.
 *  `isReplaceAndCover`: 类型：Boolean;  对于已经存在的文件如何处理，`true`：将会进行处理（怎么处理请参考 `fs.writeFileSync()`的`options:{}`进行）。`false`：则忽略，什么都不做。
 * `options`  默认值 `{encoding: "utf8", flag: "w" }`


 ## 使用方法

 ```JavaScript
 const myWriteFile = require('@yyago/node-modules-custom');

 //.....
 ```
