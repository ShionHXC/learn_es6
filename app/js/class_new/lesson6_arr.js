{
    // Array.of
    let arr = Array.of(3,4,7,9,11);
    console.log("arr==",arr);

    let empty = Array.of();
    console.log("empty",empty); 
}
{
    //数组转化功能
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    console.log(pArr);
    pArr.forEach(function(item){
        console.log(item.textContent);
    });


    //映射
    let arr = Array.from([1,3,5],function(item){
        return item * 2
    });
    console.log(arr);
}

{
    //填充数组 fill
    console.log('fill',[1,'a',undefined].fill(7));
    console.log('fill,pos',[1,'a',undefined].fill(7,1,3)); // 替换值  替换值起始位置  替换的长度
}

{
    // 遍历相关
    for(let index of ["a","gg","1"].keys()){
        console.log('keys',index);
    };
    for(let values of ["a","gg","1"].values()){
        console.log('values',values);
    };

    for(let [index,value] of ["fds",true,NaN].entries()){
        console.log('values',index,value)
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
    //查找  find/findIndex
    // find 只找符合条件的第一个
    console.log([1,2,3,4,5,6].find(function(item){
        return item > 3
    }));
    console.log([1,2,3,4,5,6].findIndex(function(item){
        return item > 3
    }));
}

{
    //包含
    console.log('number',[1,2,NaN].includes(1));    //true
    console.log('NaN',[1,2,NaN].includes(NaN));    //true
}