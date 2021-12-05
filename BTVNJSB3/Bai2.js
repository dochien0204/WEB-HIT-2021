let digits1 = [1,2,3];
let digits2 = [0];
let digits3 = [9];

const add = (digits) => {
    let s = "";
    digits.forEach(val => {
        s+= val.toString();
    });
    let a = (Number(s)+1).toString().split("");
    let b = [];
    a.forEach(val =>
        {
           b.push(Number(val));
        })
    console.log(b);
}

add(digits1);
add(digits2);
add(digits3);