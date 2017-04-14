(function (exports) {
'use strict';

function print(str) {
    console.log(str);
}

print("hogehoge");

exports.print = print;

}((this.print = this.print || {})));
