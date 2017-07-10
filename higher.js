//高階関数
function myHigherFunction(func) {
    console.log('myHigherFunction');

    func();
}
//(普通)の関数
function outsideFunction() {
    console.log('outsideFunction');
}

outerHeight ();//関数呼び出し

myHigherFunction(outerHeight);//関数渡す