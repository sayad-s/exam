function evaluateLogical(a, b, op) {
    const falsy = [false, 0, null, undefined];
    if (!typeof op === 'string') {
        throw new Error('Invalid operator type');
    }

    switch (op) {
        case '&&':
            if (!a) {
                return a;
            } else {
                return b;
            }
        case '||':
            if (a) {
                return a;
            } else {
                return b;
            }
        case '??':
            if (a === null || a === undefined) {
                return b;
            } else {
                return a;
            }
        default:
            throw new Error('Invalid operator');
    }
}

console.log(evaluateLogical(5, 10, '&&')); // 10
console.log(evaluateLogical(null, 'default', '??')); // "default"
console.log(evaluateLogical(false, 42, '||')); // 42