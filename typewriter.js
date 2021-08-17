const sentence = "hello there from lighthouse labs";
let delay = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay = delay + 100;
}
console.log(delay)
setTimeout(() => {
    process.stdout.write('\n');
}, delay);