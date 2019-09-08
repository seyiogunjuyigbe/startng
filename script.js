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
