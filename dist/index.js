function add(num1, num2) {
    return num1 + num2;
}
add("1", "1");
function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "John", lastName: "Doe" };
console.log(greet(user)); // "Hello, John Doe"
import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map