function getValue(){
	document.querySelector('#bacon').onclick=talk;
}
function talk(){
	alert('Hey');
}
window.onload=getValue;