let uncompleteList = document.querySelector(".toDoItems");
let completeList = document.querySelector(".doneItems");

let toDoItems = ["Make To Do List", "Do Discrete Math Homework", "Watch Anime", "Build Lego Colosseum", "Go SkyDiving"];
let doneItems = ["style To Do List", "Listed to Codelabs lecture", "Do statistics homework"];

displayItems(toDoItems, uncompleteList);
displayItems(doneItems, completeList);




function displayItems(arrayOfItems, list) {
    for(let item of arrayOfItems) {
        let listItem = document.createElement("li");
        let listButton = document.createElement("button");
        listButton.innerHTML = item;
        listItem.appendChild(listButton);
        list.appendChild(listItem);
    }
}