/* Question 1 */

function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 2));

console.log(addition(-3, -6));

console.log(addition(7, 3));

/* Question 1 */

/* Question 2 */

function hoursIntoSeconds(hour) {
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds;
}

console.log(hoursIntoSeconds(2));

console.log(hoursIntoSeconds(10));

console.log(hoursIntoSeconds(24));

/* Question 2 */

/* Question 3 */

function calcPerimeter(length, width) {
    return (length + width)*2;
}

console.log(calcPerimeter(6, 7));

console.log(calcPerimeter(20, 10));

console.log(calcPerimeter(2, 9));

/* Question 3 */

/* Question 4 */

function calcTriangleArea(base, height) {
    return base*height/2
}

console.log(calcTriangleArea(3, 2));

console.log(calcTriangleArea(10, 10));

console.log(calcTriangleArea(20, 20));

/* Question 4 */

/* Question 5 */

function appenedFrontend(str) {
    return str + "Frontend";
}

console.log(appenedFrontend("Apple"));

console.log(appenedFrontend("Banana"));

console.log(appenedFrontend("Orange"));

/* Question 5 */

/* Question 6 */

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(20, 10));

console.log(sumGreaterThan100(50, 60));

console.log(sumGreaterThan100(100, -50));

/* Question 6 */

/* Question 7 */

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(3));

console.log(lessThanOrEqualToZero(0));

console.log(lessThanOrEqualToZero(-2));

/* Question 7 */

/* Question 8 */

function oppositeBoolean(bool) {
    return bool === true ? false : true;
}

console.log(oppositeBoolean(true));

console.log(oppositeBoolean(false));

/* Question 8 */

/* Question 9 */

function isNotZero(elem) {
    return elem !== 0;
}

console.log(isNotZero(5));

console.log(isNotZero(0));

console.log(isNotZero(null));

/* Question 9 */

/* Question 10 */

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

/* Question 10 */

/* Question 11 */

function isOdd(num) {
    return num%2 !== 0 ? true : false;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

/* Question 11 */

/* Question 12 */

function booleanInteger(num) {
    return num%2 === 0 ? 1 : -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

/* Question 12 */

/* Question 13 */

function isLoggedInAndSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED';
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

/* Question 13 */

/* Question 14 */

function isLoggedInOrSubscribed(str1, str2) {
    return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED';
}

console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInOrSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInOrSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

/* Question 14 */


