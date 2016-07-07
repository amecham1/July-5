

$('document').ready(function() {

    var todoApp = $('#todoApp');
    var todoTitle = $('<h1>jQuery Todo App</h1>');
    var todoInput = $('<input placeholder=\'add an item...\'></input>');
    var todoAddItemButton = $('<button>Add</button>');
    var todoClearButton = $('<button>Remove All Done</button>');
    var todoList = $('<ul></ul>');
    var todoItem = $('<li></li>');

    todoApp.append(todoTitle);
    todoApp.append(todoInput);
    todoApp.append(todoAddItemButton);
    todoApp.append(todoClearButton);
    todoApp.append(todoList);

    // add an item to the input
    // after adding item to the input then select add item button
    // hitting this button will place the item onto the list

    todoAddItemButton.click(function(){
      var inputText = todoInput.val();
      var itmClone = todoItem.clone();
      itmClone.text(inputText);
      todoList.append(itmClone);

      todoInput.val('');
    });
    todoList.on("click", "li", function(){
      var listItem = $(this);

      listItem.toggleClass('done');
    });

    todoClearButton.click(function(){
      $('.done').remove();
    });
});
