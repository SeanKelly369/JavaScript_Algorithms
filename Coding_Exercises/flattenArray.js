function flattenArray(arr) {
  const oneArray = [];

  flatten(arr);

  function flatten(arr) {
    arr.forEach((element) => {
      //console.log(`element is ${element}`)
      if(Array.isArray(element)) {
        flatten(element);
        console.log(`element flattened is ${element}`)
      } else {
          oneArray.push(element);
      }
    });
  }
  return oneArray;
}

flattenArray([[['a']], [['b']]]);
