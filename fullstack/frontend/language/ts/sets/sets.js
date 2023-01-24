var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numers = [1, 2, 3, 3, 4, 4];
var uniqeNumbers = new Set(numers);
console.log(uniqeNumbers);
var string12 = ["apple", "boll", "apple", "cat"];
var uniqeStrings = new Set(string12);
console.log(uniqeStrings);
var objects = [{ apple: "apple" }, { boll: "boll" }, { apple: "apple" }, { cat: "cat" }];
var uniqeobjectsgs = new Set(__spreadArray([], objects, true));
console.log(uniqeobjectsgs);
