console.log("DOM loaded");

var inputField = document.getElementById("inputField");
inputField.addEventListener("keyup", function(event){
	// console.log("keyup works", event);
	if(event.keyCode == 13){
		// console.log("checking keycode");
		Chatty.addMessage(inputField.value);
		inputField.value = "";
	}
})

function populate (messages) {
	console.log("are they here", messages);
	var output = document.getElementById("output");

	for (var i = 0; i < messages.length; i++) {
		output.innerHTML += `<p>${messages[i]}<button class="delete-btns">Delete</button></p>`;
	}
	deleteButtons();
}

function deleteButtons () {
	var delBtn = document.getElementsByClassName("delete-btns");
	for (var j = 0; j < delBtn.length; j++) {
		delBtn[j].addEventListener("click", function(event){
			console.log("event", event);
			output.removeChild(event.target.closest("p"));
		})
	}
}
Chatty.loadMessage(populate);

/////////////CLEAR ALL///////////////
    var clearAll = document.getElementById("clearAll");
    clearAll.addEventListener("click", function(){
        output.innerHTML = "";
        clearAll.setAttribute("disabled", true)
    });
        //////////DARK THEME//////////
    var darkTheme = document.getElementById("dark");
    darkTheme.addEventListener("click", () => {
        let checkboxTheme = document.querySelector("body");
        checkboxTheme.classList.toggle("tog-color")
    });
        //////////MAKE LARGE//////////
    var makeLarge = document.getElementById("large");
    makeLarge.addEventListener("click", () => {
        let checkboxTheme = document.getElementById("output");
        checkboxTheme.classList.toggle("tog-large");
    });