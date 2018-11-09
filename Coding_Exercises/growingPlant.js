function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let currentHeight = 0;

  while(currentHeight < desiredHeight) {
    days++;
    currentHeight += upSpeed;
    if(currentHeight < desiredHeight) {
      currentHeight -= downSpeed;
    }
  }
  return days;
}
growingPlant(100, 10, 910);
