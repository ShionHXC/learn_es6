{
    console.log(0b11101101);    //ES6 二进制   b不区分大小写
    console.log(0O7512);        //    八进制   
}

{
    Number.isFinite();      //有尽的
    console.log(Number.isFinite(15));
    console.log(Number.isFinite(NaN));
}
{
    //是否是整数   参数必须是数字格式
    
    console.log('Number.isInteger(24)',Number.isInteger(24));
    console.log('Number.isInteger("24.0")',Number.isInteger("24.0"));
    console.log('Number.isInteger(24.0)',Number.isInteger(24.0));
}
{
    //
    console.log("数的最大上限",Number.MAX_SAFE_INTEGER);
    console.log("数的最大下限",Number.MIN_SAFE_INTEGER);

    console.log('1+2是否是安全数字',Number.isSafeInteger(1+2));    // => true
    console.log('0.1+0.2是否是安全数字',Number.isSafeInteger(0.1+0.2));    // =>false
}  

{
    // 返回小数的整数部分
    Math.trunc(4.1);    //4
    Math.trunc(4.9);    //4
}

{
    // 判断正数、负数、0 Math.sign
    console.log('-5',Math.sign(-5));
    console.log('5',Math.sign(5));
    console.log('0',Math.sign(0));
    console.log('0',Math.sign("-3"));   // 字符串转化为数字类型
    console.log('a',Math.sign("a"));
}
{   //立方根
    console.log('8',Math.cbrt(8)); 
}
//  三角函数，对数......