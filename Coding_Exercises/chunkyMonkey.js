function chunkyMonkey(arr, size) {
  const nested = [];
  let count = 0;

  while(count < arr.length) {
    nested.push(arr.slice(count, count += size));
    //console.log(`count += size is ${count += size}`)
  }
  return nested;
}

chunkyMonkey(['a', 'b', 'c', 'd'], 2);
//chunkyMonkey([0, 1, 2, 3, 4, 5], 4);
