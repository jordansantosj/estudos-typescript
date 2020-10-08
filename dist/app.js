var message = "Hello World";
console.log(message);
var episode = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid; //Any
favoriteDroid = 'bb-8';
favoriteDroid = 10;
console.log("My favourite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 4;
console.log("Is " + distance + " parsecs enough to beat Millennnium Falcon? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
var calling = function (name) { return console.log("Do you copy?, " + name); };
calling('R2');
function increment(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 2) = " + increment(5, 2));
console.log("inc(5, 1) = " + increment(5, 1));
console.log("inc(5) = " + increment(5));
