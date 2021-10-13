window.addEventListener("load", function () {
    const code = document.getElementById("code");
    const run = document.getElementById("run");
    const output = document.getElementById("output");
    
    const write = (...vals) => {
        vals.forEach((s, i) => {
            if(typeof s !== "string") {
                s = JSON.stringify(s);
            }
            output.value += s;
            if(i + 1 !== vals.length) {
                output.value += " ";
            }
        });
    };
    
    run.addEventListener("click", function () {
        output.value = "";
        let stack = Peculi(code.value, write);
    });
    
    let keyState = {};
    code.addEventListener("keydown", function (ev) {
        keyState[ev.key] = true;
        if(keyState.Enter && keyState.Control) {
            run.click();
        }
    });
    code.addEventListener("keyup", function (ev) {
        keyState[ev.key] = false;
    });
    document.addEventListener("visibilitychange", function () {
        for(let key of Object.keys(keyState)) {
            keyState[key] = false;
        }
    });
});