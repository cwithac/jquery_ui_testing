$(function() {
  $('.box').draggable();
  $('#box1').draggable({ containment: 'parent', scroll: false });
  // $('#box1').draggable({ containment: ".container", scroll: false });
  $('#box2').draggable({axis: 'x'});
  // $('#box2').draggable({axis: 'y'});
});
