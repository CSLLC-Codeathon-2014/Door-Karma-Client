function done(){
	console.log('nailed that done');
	var userName=document.getElementById('userInput').value;
	var time=document.getElementById('timeInput').value;
	var secret=document.getElementById('secretInput').value;
	var ip=document.getElementById('serverIP').value;
	window.localStorage.setItem("name", userName);
	window.localStorage.setItem("time", time);
	window.localStorage.setItem("secret", secret);
	window.localStorage.setItem("serverIP", ip);
	window.localStorage.setItem("changeTime", true);
	window.location="index.html";
}

function cancel(){
	window.location="index.html";
}



var dButton = document.getElementById('doneButton');
if(dButton.addEventListener){
	dButton.addEventListener("click", done, false);
}else if(dButton.attachEvent){
	dButton.attachEvent('onclick', done);
}

var cButton = document.getElementById('cancelButton');
if(cButton.addEventListener){
	cButton.addEventListener("click", cancel, false);
}else if(cButton.attachEvent){
	cButton.attachEvent('onclick', cancel);
}

$('#timeInput').val(window.localStorage.getItem('time'));
$('#userInput').val(window.localStorage.getItem('name'));
$('#secretInput').val(window.localStorage.getItem('secret'));
$('#serverIP').val(window.localStorage.getItem('serverIP'));
