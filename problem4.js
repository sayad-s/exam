function countFractionOnes(str) {
    let count = 0;
    let fraction = str.slice(12);
    for (let bit of fraction) {
        if (bit === '1') {
            ++count;
        }
    }

    return count;
}

console.log(countFractionOnes("1100000000011010000000000000000000000000000000000000000000000000"));
// Output: 1

console.log(countFractionOnes("0011111110111001100110011001100110011001100110011001100110011010"));
// Output: 21