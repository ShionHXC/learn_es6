//正则新增特性
{
    // ES5写法 i 忽略大小写
    let reg1 = new RegExp('abc', 'i'); //方式1,两个参数必须是字符串
    let reg2 = new RegExp(/abc/i); //方式2
    console.log(reg1.test('abc123'), reg2.test("abc123"));

    //ES6 写法
    let reg3 = new RegExp(/abc/ig, 'i'); // 修饰符后边的覆盖前面
    console.log(reg3.flags); // ES6新增获取正则对象修饰符
}

// y修饰符  区别于g  在于  下一个寻找位置
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;         //从上一次位置开始寻找，不强调是否紧跟上一次结束位置
    let a2 = /b+/y;         //从上一次位置开始寻找，紧跟上一次结束位置
    console.log('one', a1.exec(s), a2.exec(s));
    console.log('two', a1.exec(s), a2.exec(s));

    //
    console.log(a1.sticky,a2.sticky);   //判断是否是y修饰符
}
// u 修饰符        unicode 缩写
{

}