$(document).ready(function () {
    var toDo = [];
    var list = $('.todo-list');
    var newElement = $('.add-element');

    for (var i = 0; i < toDo.length; i++) {
        var elementToDo = $('.cestino li').clone();
        elementToDo.prepend(toDo[i]);
        list.append(elementToDo);
    }
// AGGIUNGI ELEMENTO LISTA
newElement.keyup(function (e) {
  if (e.which == 13) {
    var text = newElement.val().trim();
      if (text !== '') {
        var newElementToDo = $('.cestino li').clone();
        newElementToDo.prepend(text);
        list.append(newElementToDo);
        newElement.val('');
    }
  }
});
// RIMUOVI ELEMENTI LISTA
        $('body').on('click', '.todo-list li i', function () {
            $(this).parent().remove();
        });
        $('body').on('click', '.todo-list li', function () {
            $(this).toggleClass('delete-line');
        });
});
