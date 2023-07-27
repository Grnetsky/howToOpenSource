// esm打包配置
var common = require("./rollup")

const nodeResolve = require("rollup-plugin-node-resolve");
module.exports = {
    input:"src/index",
    output:{
        file:"dist/index.esm.js",
        format:"es",
        banner:common.banner
    },
    plugins:[common.getCompiler()]

}