module.exports = function reverse (n) {
  let word;
    if (n < 0) {n = n * (- 1);}
    word = String(n).split('').reverse().join('');
    return +word;
}
