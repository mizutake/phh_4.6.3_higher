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

function showDecoratedElement(value, key) {
    //console.log('キー(' + key + ') : 値（' + value + ')');
    console.log(`キ-(${key}) : 値(${value})`);
}


let ary = [1, 2, 4, 8, 16];
arrayWalk (ary, showDecoratedElement);
//ary.forEach (showElement);