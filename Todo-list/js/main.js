$(document).ready(function() {
    $('#add-task').on('click', function() {
        var task = $('#new-task').val();
        if (task) {
            $('#todo-list').append('<li>' + task + '<span class="remove-btn"> X</span></li>');
            $('#new-task').val('');
        }
    });

    $('#todo-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#todo-list').on('click', '.remove-btn', function(e) {
        $(this).parent().fadeOut(function() {
            $(this).remove();
        });
        e.stopPropagation();
    });
});
