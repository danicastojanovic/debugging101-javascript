/* Please identify the issue with the following code. */
let total = 0; // total declared not initialized
for (let i = 0; i < 10; i += 2) {
    total += i;
}
console.log(total);