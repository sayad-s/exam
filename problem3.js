function evaluateTruthiness(arr) {
    let res = {
        truthy: [],
        falsy: [],
    };
    for (let elem of arr) {
        if (elem) {
            res.truthy.push(elem);
        } else {
            res.falsy.push(elem);
        }
    }

    return res;
}

console.log(evaluateTruthiness([0, 1, "", "hello", null, undefined, false, true, [], {}]));
// Output: { truthy: [1, "hello", true, [], {}], falsy: [0, "", null, undefined, false] }