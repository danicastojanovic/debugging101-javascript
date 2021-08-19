/* Identify the bug in following code block. */
//infinite loop
for(let i = 100; i < 200; i += 1) { // i > 200
  console.log(i);
}