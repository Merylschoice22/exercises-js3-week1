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



Weather API

https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely

56ff6869ae6e4a328054f75904f02b09