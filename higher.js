//高階関数
function arrayWalk(data, f) {
    for (var key in data) {
        f(data[key], key);
    }
}
//コールバック関数
function showElement(value, key) {
    console.log(key + ':' + value);
}

let ary = [1, 2, 4, 8, 16];
//arrayWalk(ary, showElement);
ary.forEach (showElement);