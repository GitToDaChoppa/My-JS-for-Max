autowatch = 1;

function paint() {
  var val = box.getvalueof();
  var viewsize = mgraphics.size;

  var w = viewsize[0];
  var h = viewsize[1];

  mgraphics.set_line_width(2);
  mgraphics.set_line_cap("round");
  mgraphics.set_line_join("round");

  // Shape Coords and Dimensions
  var squareSize = (25 * w) / 100;
  var shapeOriginHorizontal = w * 0.5 - squareSize / 2;
  var shapeOriginVertical = h * 0.5 - squareSize / 2;
  const soh = shapeOriginHorizontal;
  const sov = shapeOriginVertical;
  offsetH = val / 2;
  const secRectW = soh - offsetH - val * 0.15;
  const secRectH = sov - val;
  var linerOffset = 5;
  var liner1 = 2.5;
  var liner2 = liner1 + linerOffset;
  var liner3 = liner2 + linerOffset;
  var liner4 = liner3 + linerOffset;

  with (mgraphics) {
    set_source_rgba([0, 0, 0, 1]);
    set_line_width(3);
    rectangle(0, 0, w, h);
    fill();

    // set_source_rgba(255, 0, 0, 1);
    // move_to(soh + 1 - liner1, sov + squareSize - liner1);
    // line_to(soh + squareSize - 1 - liner1, sov + squareSize - liner1);
    // stroke();

    // set_source_rgba(255, 255, 0, 1);
    // move_to(soh + 1 - liner1, sov + squareSize - liner2);
    // line_to(soh + squareSize - 1 - liner2, sov + squareSize - liner2);
    // stroke();

    // set_source_rgba(0, 255, 255, 1);
    // move_to(soh - liner2, sov + squareSize -liner3);
    // line_to(soh + squareSize - 1 - liner3, sov + squareSize - liner3);
    // stroke();

    set_source_rgba(255, 255, 255, 1);
    rectangle_rounded(secRectW, secRectH, squareSize, squareSize, 5, 5);
    stroke();
    rectangle_rounded(soh, sov, squareSize, squareSize, 5, 5);
    stroke();
    rectangle_rounded(soh, sov, squareSize, squareSize, 5, 5);
    fill();

    set_source_rgba(255, 255, 255, 1);
    move_to(soh, sov);
    line_to(secRectW + 1, secRectH);
    stroke();

    move_to(soh + 1, sov + squareSize);
    line_to(secRectW + 1, secRectH + squareSize);
    stroke();

    move_to(soh + squareSize - 1, sov);
    line_to(secRectW + squareSize - 1, secRectH);
    stroke();

    move_to(soh + squareSize - 1, sov + squareSize);
    line_to(secRectW + squareSize - 1, secRectH + squareSize);
    stroke();
  }
}
