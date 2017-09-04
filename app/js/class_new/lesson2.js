{
    let a,b;
    [a,b] = [1,2];
}

{
    let a, b, rest;
    [a, b, ...rest] = [1,2,3,4,5,6,7,8];
    console.log(a,b,rest)
}

{
    let a, b;
    ({a,b} = {a:1,b:2})
    console.log(a,b)
}

// 解构赋值 默认参数
{
    let a,b,c;
    [a,b,c=3] = [1,22];
    console.log(a,b,c);
}
//结构赋值应用场景  变量交换
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);
}

{
    function f(){
        return [2223,3332]
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
}

{
    function f(){
        return [9,8,6,4,3]
    }
    let a,b;
    [a,,,b] = f();
    console.log(a,b);
}

{
    function f(){
        return [9,3,4]
    }
    let a,b;
    [a,,...b] = f();
    console.log(a,b);
}

// 对象解构赋值
{
    let o = {q:2222,p:true};
    let {p,q} = o;
    console.log(p,q);
}

{
    let {a=3,b=5} = {a:33};
    console.log(a,b); 
}

{
    let json = {
        title : 'Hello World',
        tast : [{
            title: '标题1',
            descript: '内容1'
        }]
    }
    let {title:esTitle,tast:[aaaaa]} = json;
    console.log(esTitle,aaaaa);
}