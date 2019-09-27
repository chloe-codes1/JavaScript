/**
 * 
 */
let box = document.getElementById("display");
box.value= "";

function insert(e){
	
	box.value += e;
	if (e == "c"){
		resetScreen();
	}
}

function resetScreen(){
	box.value ='';
}

function answer(){
	let s = box.value;
	box.value = String(eval(s));
}

