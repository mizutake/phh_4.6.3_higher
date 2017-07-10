//高階関数
function myHigherFunction(func) {
    console.log('myHigherFunction');
    return outsideFunction;
}
//(普通)の関数
function outsideFunction(value) {
    console.log('value:' + value);
}
// let returnValue = myHigherFunction();
// returnValue();
myHigherFunction()('引数だよ')
//outerHeight ();//関数呼び出し

//myHigherFunction();

//myHigherFunction(outerHeight);//関数渡す