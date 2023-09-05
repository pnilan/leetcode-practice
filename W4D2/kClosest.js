/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// IOCE
// Input: array of coordinates (points), integer k
// Output: return k closest points to the origin (return array of coordinates arrays)
// Constraints: n/a
// Edge Cases: n/a
//
// Strategy
// create helper func called getDistToOrigin(coord) which returns a number and takes coord array as argument
// iterate through points array and calculate the distance to origin for each coordinate
// push calc distance to distanceArray, then sort
// create coordArray and iterate over while loop until coordArray has k elements,
// iterate over points array again and push coord to coordArray if it is in first k elements of distArray
// return coordArray

const kClosest = (points, k) => {

  let distanceArray = [];

  points.forEach((coord) => {
    let dist = getDistToOrigin(coord);
    distanceArray.push(dist)
  });

  distanceArray = distanceArray.sort(compareNumbers).slice(0, k);

  let coordArray = [];

  while (coordArray.length < k) {
    points.forEach((coord) => {
      if (distanceArray.includes(getDistToOrigin(coord))) {
        coordArray.push(coord);
      }
    });
  }

  return coordArray;

};

const getDistToOrigin = (coord) => {
  const [x, y] = coord;
  return Math.sqrt((x - 0) ** 2 + (y - 0) ** 2);
};

const compareNumbers = (a, b) => {
  return a - b;
};