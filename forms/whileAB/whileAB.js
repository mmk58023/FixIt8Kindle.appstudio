let userName = prompt('Please enter your name:')
let i = 0

while(i < userName.length) {
  console.log(`Letter ${i+1} is: ${userName.charAt(i)}`);
  i++;
}
