var x = 9
var flag = false

for (i = 1; i <= x ** 0.5; i++) {
    if (x === i ** 2) {
        flag = true
    }
}
if (flag) {
    console.log(`${x} là số chính phương`)
}
else {
    console.log(`${x} không phải là chính phương`)
}
