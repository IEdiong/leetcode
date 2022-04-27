'use strict';

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  //     1. create a matrix to hold the transposed matrix
  let transposeMatrix;
  transposeMatrix = new Array(col);

  for (let i = 0; i < col; i++) {
    transposeMatrix[i] = new Array(row).fill(1);
  }

  //     2. loop through each row in the matrix
  for (let i = 0; i < row; i++) {
    //     3. for each item in the row, matrix[row][col], place them in their new position in the transposed matrix, transposeMatrix[col][row]
    for (let j = 0; j < col; j++) {
      transposeMatrix[j][i] = matrix[i][j];
    }
  }

  return transposeMatrix;
};

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(matrix));

/*
      2,  4, -1
    -10,  5, 11
     18, -7,  6
     
     
      2,-10, 18
      4,  5, -7
     -1, 11,  6
*/
