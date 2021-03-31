function sum(a) {
    let cSum = a;

    function f(b) {
        cSum += b;
        return f;
    }
    f.toString = function () {
        return cSum;
    }
    return f;
}
