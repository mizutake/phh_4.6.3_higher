//高階関数
function myHigherFunction(func) {
    console.log('myHigherFunction');
    return outsideFunction;
}
//(普通)の関数
function outsideFunction() {
    console.log('outsideFunction');
}
let returnValue = myHigherFunction();
returnValue();

//outerHeight ();//関数呼び出し

//myHigherFunction();

//myHigherFunction(outerHeight);//関数渡す