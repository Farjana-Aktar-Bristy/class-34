const first = { a: 2, b: 3 };
const second = { a: 2, b: 3 };
const third = first;

if (first === second) {
    // console.log("first and second are same");
}
else {
    // console.log("first and second aren't same");
}

if (first === third) {
    // console.log("first and third object are same");
}
else {
    // console.log("first and third object are not same");
}

if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log("object are same");
}
else {
    console.log("object aren't same");
}