/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#one').next().next().text('milk');
// add a new element by clicking the plus sign
$('#add').click(addElement);

// before and after are for siblings
$('#one').after('<li>great</li>');
// append and prepend are for parent

function addElement() {
  // add a new element
  // add a input text box
  $('#todo').append("<li><input type='text'></li>");
  // whenever the user are done add the element

  $('input').blur(function () {
    $(this).parent().addClass('cool');
    $('li').click(changeStyle);
    var userinput = $(this).val();
    $(this).parent().text(userinput);
  });
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
