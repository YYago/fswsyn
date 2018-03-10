# node-modules-custom

Node.js 内置模块自定义改装。

**下载使用须知:**  这个npm package 似乎没有什么普遍适用性，开发者自用(穷，买不起私有服务)，如果使用到你自己的项目中，请自己审查代码是否适合，避免造成的损失(因为目的在避免触发错误callback导致运行中断，所以可能会对BUG检查、性能等方面带来影响)！！！

## APIs

### 1、 .fs_wfSync ( filePath, data, isReplaceAndCover )

`fs.writeFileSync()` 的免报错改进。

 *  `filePath`:  文件路径.
 *  `data`:  内容.
 *  `isReplaceAndCover`: 类型：Boolean;  对于已经存在的文件如何处理，`true`：将会进行处理（怎么处理请参考 `fs.writeFileSync()`的`options:{}`进行）。`false`：则忽略，什么都不做。
 * `options`：arguments[3]  默认值 `{encoding:'utf-8',flag:'w'}` ，当设置为`{flag:'a'}` 的时候将对已经存在的文件执行追加操作。
    >{mode:'0o666'} 可能带来一些权限问题，这里就不指定了。

> examp：
>
> ```xxx.fs_wfSync('a.txt','hello',true,{flag:"a"});```

### 2、 .fs_mkdirSync ( pathString )

`fs.mkdirSync()` 的改进，尽可能避免触发 ‘文件夹已经存在’ 的callback。

* `pathString`: 文件夹路径。

## 使用方法

Install:

 ```
 npm install --save node-modules-custom
 ```

Require:
 ```JavaScript
 const myWriteFile = require('node-modules-custom');

 //.....
 /*
   If a.txt didn't exist will create it,else add the content:'hello' to it.
 */
 myWriteFile.fs_wfSync('a.txt','hello',true,{flag:"a"});
 

 /*
   If a.txt didn't exist will create it,else rewrite it.
 */
myWriteFile.fs_wfSync('a.txt','hello',true);


/*
   If a.txt didn't exist will create it,else notring.
*/
myWriteFile.fs_wfSync('a.txt','hello',false);

 ```
