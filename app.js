$(function() {
  //DRAGGABLE
  // https://jqueryui.com/draggable/
    // $('.box').draggable();
    // $('#box1').draggable({ containment: 'parent', scroll: false, revert: 'invalid' });
    // $('#box1').draggable({ containment: 'parent', scroll: false });
    // // $('#box1').draggable({ containment: ".container", scroll: false });
    // $('#box2').draggable({axis: 'x'});
    // // $('#box2').draggable({axis: 'y'});

  //DROPPABLE
  // https://jqueryui.com/droppable/
    // $('#droppable').droppable({
    //   accept: '#box1',
    //   drop: function() {
    //     $(this).find('span').html("Drop it like it's hot.")
    //   }
    // });

  //SORTABLE
  // // https://jqueryui.com/sortable/
    // // $('#sortable').sortable();
    // $('#sortableToo').sortable();
    // // $('#sortable').sortable({connectWith: '#sortableToo'});
    // $('#sortable').sortable({connectWith: '#sortableToo', placeholder: 'placeholderBox'}); //placeholderBox is styled class
    // $('#sortableToo').sortable({connectWith: '#sortable'});

  //ACCORDION
    // https://jqueryui.com/accordion/
        // $('#accordion').accordion();
        // $('#accordion').accordion({ collapsible: true, heightStyle: "content" });

  //DATE PICKER
    // https://jqueryui.com/datepicker/
      // $('.date').datepicker();
      $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 3,
        minDate: -1, //Current date backwards restriction "-1W" etc
        maxDate: "1W"
      });
});
