var x = 17
var flag = true
if (x < 2) {
    console.log(`${x} ko phải là số nguyên tố`);
}
else {
    for (var i = 2; i <= x ** 0.5; i++) {
        if (x % i === 0) {
            flag = false
        }
    }
    if (flag) {
        console.log(`${x} là số nguyên tố`);
    }
    else {
        console.log(`${x} ko phải là số nguyên tố`);
    }
}
