const path = require("path");

exports.default = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.webpack.js",
        library: "print",
        libraryTarget: "commonjs"
    }
};