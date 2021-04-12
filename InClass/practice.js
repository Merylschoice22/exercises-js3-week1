/* convert to arrow functions */


function compareNumbers(m, n) {
  let message = ''
    if (m < n) {
    message = m + " is smaller than " + n;
  } else {
    message = m + " is bigger than or equal to " + n;
  }
  return message;
}

/* =====> */
const compareNumbers = (m, n) => {
    m < n ? `${m} is smaller than ${n}` : `${m} is bigger than or equal to ${n}`;
}


function getCircleArea(radius) {
  var pi = Math.PI;
  var rSquared = Math.pow(radius, 2);

  return pi * rSquared;
}

/* =====> */
const getCircleArea = (radius) => {
    const pi = Math.PI;
    const rSquared = Math.pow(radius, 2);
    return pi * rSquared;
}


