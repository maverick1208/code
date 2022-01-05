
const text = document.getElementById('items');
document.getElementById('items').placeholder = "enter your text here";
const button = document.getElementById('add');
var list = document.getElementById('new-list');
//var each = document.getElementsByTagName("li");

button.addEventListener('click', function(){
    var todo = document.createElement('li');
    todo.classList.add('li');
    todo.innerText = items.value;
    //list.appendChild(todo);
    list.insertBefore(todo, document.getElementsByTagName("li")[0]);
    items.value = "";

    todo.addEventListener('click', function(){
        todo.classList.add('checked');
    })

    todo.addEventListener('dblclick', function(){
        list.removeChild(todo);
    })
})



/*

button.addEventListener('click', function(){
    list.unshift('') = text.value;



}
    )
    add.onclick = function() {function addlist()};
    function addlist() {
        document.getElementById("item").innerHTML = items;
        return this.items;
    } */
//items = document.getElementById("items").value;
//}
//document.getElementById("items").innerHTML = item;
//item.unshift(items);