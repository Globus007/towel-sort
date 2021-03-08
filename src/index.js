module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((el, index) => index%2 ? el.reverse() : el).flat() : [];
}
