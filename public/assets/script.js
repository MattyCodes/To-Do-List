$(document).ready(function() {
  clearInput();
  toggleEdit();
});

function clearInput() {

  $('#todo-form').on('submit', function() {
      $('#todo-input').val('');
  });

};

function toggleEdit() {

  $(document).on('click', '.edit-btn', function() {
    $('#todo-list').hide();
    $('#new-todo').hide();
    $('#edit-todo').removeClass('hide').show();
  });

  $(document).on('click', '#update-btn', function() {
    $('#edit-todo').hide();
    $('#todo-list').show();
    $('#new-todo').show();
    clearInput();
  });

  $(document).on('click', '#cancel-edit', function() {
    $('#edit-todo').hide();
    $('#todo-list').show();
    $('#new-todo').show();
    clearInput();
  });

};
