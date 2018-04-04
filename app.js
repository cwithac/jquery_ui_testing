$(function() {
  //DRAGGABLE
  // https://jqueryui.com/draggable/
    $('.box').draggable();
    $('#box1').draggable({ containment: 'parent', scroll: false, revert: 'invalid' });
    // $('#box1').draggable({ containment: 'parent', scroll: false });
    // // $('#box1').draggable({ containment: ".container", scroll: false });
    // $('#box2').draggable({axis: 'x'});
    // // $('#box2').draggable({axis: 'y'});

  //DROPPABLE
  // https://jqueryui.com/droppable/
  $('#droppable').droppable({
    accept: '#box1',
    drop: function() {
      $(this).find('span').html("Drop it like it's hot.")
    }
  });
});
