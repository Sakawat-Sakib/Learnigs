function abc() {
    return 10;
}
function xyz() {
    console.log('hello');
}
//enum (quite similar with object)
var MousePosition;
(function (MousePosition) {
    MousePosition[MousePosition["x"] = 0] = "x";
    MousePosition[MousePosition["y"] = 0] = "y";
})(MousePosition || (MousePosition = {}));
console.log(MousePosition.x);
var address;
var sakib = {
    name: 'SAKIB',
    age: 28,
    email: 'sakawatsakib@gmail.com'
};
console.log(sakib);
function getFood(food) {
    console.log(food.price);
}
var sweet = {
    name: 'Sawndesh',
    price: 122,
    tag: 'gold'
};
getFood(sweet);
//literal
var num;
num = 10; // I can't assign any value other than 10
