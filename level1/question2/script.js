var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL = "https://jsonplaceholder.typicode.com/todos";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function(){
	var todoCards = request.response;
	theHeader(todoCards);
	visibleCards(todoCards);
}

function theHeader(jsonObj){
	var h1 = document.createElement("h1");
	h1.textContent = "To Do Cards";
	header.appendChild(h1);
}

function visibleCards(jsonObj){
	var list = jsonObj;
	for (var i = 0; i < list.length; i++){
		section.innerHTML += "<div class='toDoList'>" + "<h1>" + list[i].id+"." + " To Do Card" + "</h1>" + "<p>" + 'Title: ' + list[i].title + "</p>" + "<p>" + list[i].completed + "</div>"; 
	}
}
