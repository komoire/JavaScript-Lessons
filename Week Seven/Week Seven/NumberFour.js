// An infinite loop happens when a loop keeps running indefinitely without reaching a termination condition. 
// This can result in the browser or server freezing because the program is stuck in the loop.

// Infinite for loop example
for (let i = 1; i < 10; i--) {
    console.log(i);
    // Decrementing i causes the loop to never reach the termination condition
  }
  
// Stopping the infinite loop
for (let i = 1; i < 10; i--) {
    console.log(i);
    if (i === -5) {  // Stop the loop when i reaches -5
      break;
    }
  }
  
