const fs = require("fs");
const path = require("path");
const Peculi = require("./peculi.js");

const write = (...vals) => {
    let output = "";
    vals.forEach((s, i) => {
        if(typeof s !== "string") {
            s = JSON.stringify(s);
        }
        output += s;
        if(i + 1 !== vals.length) {
            output += " ";
        }
    });
    process.stdout.write(output);
};

let arg = process.argv[2];
let program = fs.readFileSync(arg).toString();
let wd = path.dirname(arg);
//TODO: use this only for imports?
process.chdir(wd);

Peculi(program, write, {});