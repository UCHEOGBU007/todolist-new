var form = document.getElementById('todolist');


//Adding items in the list 


form.addEventListener("submit",smith);
function smith(e){
	e.preventDefault();
	let list = document.getElementById('names').value;
	
	let todo = document.createElement("li");
	todo.className = "list-items";
	todo.appendChild(document.createTextNode(list));
	

	//adding the delete icon 

	let trash = document.createElement("i");
	trash.className = "fa-solid fa-trash";
	trash.style.color = "red";
	trash.style.cursor = "pointer";
	todo.appendChild(trash);

	form.appendChild(todo);
	document.getElementById("names").value = "";

	
}

// add Todo delete item button

form.addEventListener("click",removeItem);
function removeItem(e){
	if (e.target.classList.contains('fa-solid')) {
		if (confirm("Are you that you want to delete this item?")) {
			let leader = e.target.parentElement;
			form.removeChild(leader);
		}
	}
}
