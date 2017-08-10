$(document).ready(function() {
  clearInput();
});

function clearInput() {
  $("#todo-form").on('submit', function() {
      $("#todo-input").val('');
  });
};
