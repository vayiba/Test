function countNumbers(limit) {
  let count = 0;
  for (let i = 1; i <= limit; i++) {
    count += 1;
    console.log(`Counting: ${i}`);
  }

// return count;
  return limit; 
}

const total = countNumbers(10);
console.log(`Total count: ${total}`);
