// function pattern(){
// return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)
// 	}

var nameField = document.getElementById('nameField');
	nameField.oninvalid = function(event) {
    event.target.setCustomValidity('Your name should only contain letters. e.g. John');
     // location.reload();
}
nameField.oninput=function(event){
	event.target.setCustomValidity('');
	}
	nameField.onchange=function(event){
	event.target.setCustomValidity('');
	}
var form = document.querySelector("form");

form.addEventListener("submit", function () {
	var sender = document.querySelector("#nameField").value;
	alert(`Thank you ${sender}, your message has been sent!`);
	window.location.reload()
})