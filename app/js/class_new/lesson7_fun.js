{
    function test(x,y = 'world'){
        console.log("默认",x,y)
    }
    test("Hello");
    test("Hello","huangxc"); 
}

{
    let x = "test";
    function test2(c,y=x){      //作用域问题
        console.log('作用域',c,y);
    };
    test2("kill");
    test2(); 
} 
{
    function test3(a,b,...arg){
        for(let v of arg){
            console.log('rest',v);
        }
    };
    test3(2,3,4,"asf");
}

{
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
}

{
    let arrow = v => v*2;  // 函数名 = 参数 => 返回值
    let arrow2 = () => 2333;
    console.log(arrow(3));
    console.log(arrow2());
}

{
    //尾调用  return 另一个函数 替代递归 提升性能
    function tail(x){
        console.log('tail',x)
    };
    function fx(x) {
        return tail(x)
    };
    fx(123);
}