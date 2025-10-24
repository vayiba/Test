function countNumbers(limit) {
  let count = 0;
  for (let i = 1; i <= limit; i++) {
    count += 1;
    console.log(`Counting: ${i}`);
  }

  // ❌ Bad line: This should probably return count, not limit
  return limit; 
}

const total = countNumbers(10);
console.log(`Total count: ${total}`);
