function drawDashedLine(start, end) {
  var dashSpace = 2;
  var dashLine = 2;

  var dirVec = [end[0] - start[0], end[1] - start[1]];
  var dirLen = Math.pow(Math.pow(dirVec[0], 2) + Math.pow(dirVec[1], 2), 0.5);
  var dirCosSin = [dirVec[0] / dirLen, dirVec[1] / dirLen];
  var dashSpaceCosSin = [dashSpace * dirCosSin[0], dashSpace * dirCosSin[1]];
  var dashLineCosSin = [dashLine * dirCosSin[0], dashLine * dirCosSin[1]];
  var xy = [
    start[0] + 0.5 * dashSpaceCosSin[0],
    start[1] + 0.5 * dashSpaceCosSin[1],
  ];
  var prgX = 0;
  var prgY = 0;
  mgraphics.move_to(xy[0], xy[1]);
  while (
    Math.abs(prgX) <= Math.abs(dirVec[0]) &&
    Math.abs(prgY) <= Math.abs(dirVec[1])
  ) {
    xy = [xy[0] + dashLineCosSin[0], xy[1] + dashLineCosSin[1]];
    prgX += dashLineCosSin[0];
    prgY += dashLineCosSin[1];
    if (
      Math.abs(prgX) == Math.abs(dirVec[0]) &&
      Math.abs(prgY) == Math.abs(dirVec[1])
    ) {
      break;
    } else if (
      Math.abs(prgX) <= Math.abs(dirVec[0]) &&
      Math.abs(prgY) <= Math.abs(dirVec[1])
    ) {
      mgraphics.line_to(xy[0], xy[1]);
    } else {
      break;
    }

    xy = [xy[0] + dashSpaceCosSin[0], xy[1] + dashSpaceCosSin[1]];
    prgX += dashSpaceCosSin[0];
    prgY += dashSpaceCosSin[1];
    mgraphics.move_to(xy[0], xy[1]);
  }
  mgraphics.stroke();
}
