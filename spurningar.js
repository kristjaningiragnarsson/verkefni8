/*1. Það eru til þrjár leiðir að binda event við element, hver þeirra leiða er best og af hverju?
Komdu með kóðasýnidæmi.*/
/*
leiðinar þrjár eru
html event handler attributes sem er verst
dæmi um html event handler

<form method="post" action="http://www.example.org/register">
<label for="username">Create a username: </l abel>
<input type="text" i d="username" onbl ur="checkUsername()" />
<div id="feedback"></div>
<label for="password">Create a password: </label>
<input type="password" id="password" />
<input type="submit" value="Sign up!" />
</fonn>
<script type="text/javascript" src="js/event-attributes.js "></script> 

function checkUsername() {
	var elMsg = document.getElementById('feedback');
	var elUsername = document.getElementById('username');
	if (elUsername.value.length < 5){
	elMsg.textContent = 'Username must be 5 characters or more'

	}
	else{
	elMsg.textContent='';
	}
}

traditional dom event handlers sem er mjög gott og virkar á flestum browserum en það getur bara sett eitt function á hvert event
dæmi um traditional
FUNCTION checkUsername() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length< 5) {
		elMsg.textContent 'Username must be 5 characters or more'
		else {
		elMsg.textContent '';
		} 
}
var elUsername = document.getElementByld('username') ; 
elUsername.onblur = checkUsername;  
dom level 2 event listeners sem er lika gott en virkar bara á nyjum browserum það getur runnar multiple functions á hverju eventi
FUNCTION checkUsername() {
	var elMsg = document.getElementById('feedback');
	if (this.value.length< 5) {
		elMsg.textContent 'Username must be 5 characters or more'
		else {
		elMsg.textContent '';
		} 
}
var elUsername = document.getElementByld('username'); 
elUsername.addEventListener('blur',checkUsername, false);  
*/


/*
2. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi.
callback er function sem er sent til annað function svo er kallað  inn þegar sérstökum atriðum er buið að gerast til dæmis þegar þú ert að uploada file þá þegar callback er ekki þá stoppar allt en þegar callback er þá geturu enþá gert einhvað
kóðasynidæmi

// The callback method
function meaningOfLife() {
    log("The meaning of life is: 42");
}


// A method which accepts a callback method as an argument
// takes a function reference to be executed when printANumber completes
function printANumber(int number, function callbackFunction) {
    print("The number you provided is: " + number);
}

// Driver method
function event() {
   printANumber(6, meaningOfLife);
}
þetta kemur svo út 
The number you provided is: 6
The meaning of life is: 42

*/

/*
3.Hvað er EventLoop? Úrskýrðu með eigin orðum. 


*/
/*
4. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa). (1%)
function checkUsername() {
var target = e.target;
}
var el = document.getElementById('username');
el.addEventlistener('blur', checkUsername, false);

function checkUsername() {
var target = e.target;
el.addEventlistener('blur', checkUsername, false);
}
var el = document.getElementById('username');

*/

/*
5. Event flow, Hvað þýðir false í Event Listener? (0.5%)
elUsername.addEventListener('blur' , function() {
checkUsername(5);
}, false)
false er þarna svo að forritið fer ekki á stað þánga til að það er rétt til dæmis i koðanum fyrir ofan 
stopar það þángað til að username verður 5
*/

/*
6. Hvað gera eftirfarandi aðferðir? Komdu með dæmi um notkun (1%)
a. stopPropagation()
stop propagation sleppir ytri hlustendur 
elS.addEventListener("click", function() {
    event.stopPropagation();  // Hunsaðu aðra Listeners (sleppa ytri hlustendur) 
    alert("The span element was clicked.");
}, false); 
hann sleepur öllum ytri hlustendum fyrir utan koðan fyrir ofan

b. preventDefault()
preventdefault cancelar event ef það er hægt 
til dæmis ef þu klikkar á link þá stopar preventdefault hann svo hann fer ekki á sá url
document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
});
*/

