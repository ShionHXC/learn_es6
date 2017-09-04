{
    // 简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o:o,
        k:k
    };
    let es6 = {
        o,
        k
    };
    console.log(es5,es6);
}
{
    //属性表达式   中括号可以写表达式
    let a = 'b';
    let es6_obj = {
        [a] : 'c'
    };
    console.log(es6_obj); 
}

{
    // 新增API   
    // Object.is 等价 ===
    console.log('字符串',Object.is('abc','abc'));
    console.log("数组",Object.is([],[]),[]===[]);

    // 浅拷贝
    console.log("拷贝",Object.assign({a:'a'},{b:'b'}));
}

{
    //扩展运算符  支持不友好
    /* let {a,b,...c} = {a:'test',b:'eee',c:'ddd',d:'ccc'};
    console.log(c); */
}