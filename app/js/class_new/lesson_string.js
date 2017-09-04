{
    // 字符unicode表示方法
    console.log('a','\u0061');
    let s = '𠮷';
    console.log('s',`\u{20BB7}`);
}

{
    let s = '𠮷';
    console.log('length',s.length);
}

/* 判断字符串中 */
{
    let str = "string";
    console.log('includes',str.includes('c'));

    console.log('start',str.startsWith("str"));
    console.log('end',str.endsWith("ng"));
}

{
    let str = "abc";

    console.log(str.repeat(2));
}

{
    //模版字符串
    let name = "list";
    let info = "Hello world";
    let m = `i am ${name},${info}`;
    console.log(m);
}
{   
    //补白        ES7新增 api
    console.log("".padStart(2,'0'));  //最少为两位，不够补0  =》 00
    console.log("3".padEnd(2,'0'));
}
// 标签模版
{
    let user = {
        name : 'list',
        info : 'Hello World'
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        console.log(s + v1 + v2);

        return s+v1+v2
    }
}

{
    console.log(String.raw(`Hi\n${1+2}`));
    console.log(`Hi\n${1+2}`);
}