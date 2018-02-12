const fs = require('fs');
const path = require('path');
const os = require('os').type();

function cs_fs_wfSync(filePathString, datas) {
    let argms = arguments[2] || { encoding: 'utf8', flag: 'w' };

    if (os == "Windows_NT") {
        let spRegexp = new RegExp(/\\\\/g);
        if (spRegexp.test(filePathString) == false) {
            var fooFPS = filePathString.replace(/\\|\//g, "\\");
        } else {
            var fooFPS = filePathString;
        }
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.writeFileSync(filePathString, datas, argms);
        console.log(filePathString + '写入成功! success!')
    } else {
        var fooFPS = filePathString;
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.writeFileSync(filePathString, datas, argms);
        console.log(filePathString + '写入成功! success!')
    }

}
function cs_fs_wf(filePathString, datas) {
    if (os == "Windows_NT") {
        let spRegexp = new RegExp(/\\\\/g);
        if (spRegexp.test(filePathString) == false) {
            var fooFPS = filePathString.replace(/\\|\//g, "\\");
        } else {
            var fooFPS = filePathString;
        }
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.writeFile(filePathString, datas, argms, (err) => {
            if (err) throw err;
            console.log(filePathString + '写入成功! success!');
        });
    } else {
        var fooFPS = filePathString;
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.writeFile(filePathString, datas, argms, (err) => {
            if (err) throw err;
            console.log(filePathString + '写入成功! success!');
        });
    }
}
function cs_fs_mkSync(dirs) {
    if (os == "Windows_NT") {
        let spRegexp = new RegExp(/\\\\/g);
        if (spRegexp.test(dirs) == false) {
            var fooFPS = dirs.replace(/\\|\//g, "\\");
        } else {
            var fooFPS = dirs;
        }
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.mkdirSync(prfixDir)
        console.log(dirs + '写入成功! success!')
    } else {
        var fooFPS = dirs;
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.mkdirSync(prfixDir);
        console.log(dirs + '写入成功! success!')
    }
}
function cs_fs_mk(dirs) {
    if (os == "Windows_NT") {
        let spRegexp = new RegExp(/\\\\/g);
        if (spRegexp.test(dirs) == false) {
            var fooFPS = dirs.replace(/\\|\//g, "\\");
        } else {
            var fooFPS = dirs;
        }
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.mkdir(prfixDir, (err) => {
            if (err) throw err;
            console.log(dirs + '写入成功! success!')
        })
    } else {
        var fooFPS = dirs;
        let fpDirname = path.dirname(fooFPS);
        let pathSeq = fpDirname.split(path.sep);// JSON 化
        var pathJion = [];
        for (let i = 0; i < pathSeq.length; i++) {
            pathJion.push(pathSeq[i]);
            let prfixDir = pathJion.join('/');
            if (fs.existsSync(prfixDir) == false) {
                fs.mkdirSync(prfixDir);
            }
        }
        fs.mkdir(prfixDir, (err) => {
            if (err) throw err;
            console.log(dirs + '写入成功! success!')
        });
    }
}
/**
 * 自定义的fs.writeFileSync(),试图解决长路径文件不能创建的问题。
 * @description 当文件路径的dir不存在时创建文件常常会导致写入失败报错(会中断运行)，我们试着先创建文件的dir目录，最后再创建文件（写入文件）.
 * 
 *              顺便加入是否对已有文件的操作功能：是忽略已存在文件还是直接覆盖。有时候还是有用的，比如批量创建文件的时候。
 * 
 * NOTE: 对已有文件进行覆盖、追加，请自行通过参数处理，
 * 
 * @param {String} filePath 文件路径
 * @param {String} data 内容(当创建文件夹时，可以使用任意值，但必须声明)
 * @param {Boolean} isReplaceAndCover  对于已经存在的文件或文件夹如何处理，true：将会进行覆盖并替换。false：则忽略，什么都不做。
 * @argument {Object} object 默认 {"encoding": "utf8", "flag": "w" }
 */
function fs_wfSync(filePath, data, isReplaceAndCover){
    let options = arguments[3] || { encoding: "utf8", flag: "w" }; // 用于fs.writeFileSync()的options
    // 判断 filePath 是否已经存在。
    if(fs.existsSync(filePath)==false){
        cs_fs_wfSync(filePath,data,options);
    }else if(fs.existsSync() && isReplaceAndCover == true){
        fs.writeFileSync(filePath,data,options);
    }else if(fs.existsSync(filePath) && isReplaceAndCover == false){
        // 什么都不做
        console.log(filePath+'已经存在，已经忽略.');
    }
}
module.exports = {
    fs_wfSync
}