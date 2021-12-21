const search = (str) =>
{
    let arr = str.split("");
    dem = 0;
    arr.forEach((val, index) => {
        if(str.lastIndexOf(val) === str.indexOf(val))
            dem++;
        if(dem === 1)
            console.log(index);
    });
    if(dem===0) console.log(-1);
}
let str1 = "tranduong";
search(str1);
let str2 = "hitclubhiuhiu";
search(str2);
let str3 = "aabb";
search(str3);
