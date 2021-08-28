// Deret fibonacci biasa

function fibonacci(n) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= n; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
}
console.log(fibonacci(30)); 