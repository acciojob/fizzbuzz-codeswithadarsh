// Loop from 1 to 20
for (let i = 1; i <= 20; i++) {
  let output = "";

  // Check for multiples of 3
  if (i % 3 === 0) {
    output += "Fizz";
  }

  // Check for multiples of 5
  if (i % 5 === 0) {
    output += "Buzz";
  }

  // If not a multiple of 3 or 5, use the number itself
  if (output === "") {
    output = i.toString();
  }

  // Print the output using alert
  alert(output);
}
