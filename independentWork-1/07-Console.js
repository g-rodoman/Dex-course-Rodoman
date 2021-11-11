var car = "Dodge Charger";
var someObject = {str:"Some text", id:5};
console.info("My first car was a", car, ". The object is: ", someObject);

for (var i=0; i<5; i++) {
    console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}

console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue; padding: 2px;");

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");

console.time("answer time");
alert("Click to continue");
console.timeEnd("answer time");
