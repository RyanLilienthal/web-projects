let conscious = document.getElementById("freudian-script");
// The unconscious ... untouched and green / imprinted ... an unreachable element lurking behind, but all-knowwing. Variables sent in. Triggers change expression.  The variable conscious driven by the id, a freudian-script.
let count = 0;
// declare a variable as nothing, another 0, an emptiness in head and body
window.addEventListener("click", theConsciousIs)
// to open a window in your conscious; to listen for keys that click changes from action not merely in the body and framed by the mind (head), but the entirety of one's existence. OMNIPRESENT ... the marionette function acts on the body. Click click click ... "theConsciousIs"

function theConsciousIs() {
	// Did you know theConsciousIs unaware of what lurks behind, and underneath, transcribed in unscripted text. The superego alway constraining, score-keeping, counting ...
	count++
	console.log(count)
	// But, what is there to console with constant counting somewhere in one's head ... no, one's body. Everytime this function is called, one adds to the variable ... changing and returning. Locked in a cycle.
	if (conscious.innerHTML === "my head is in the ground") {
		// Does the text inside say "my head is in the ground", if so:
		conscious.innerHTML = "perhaps it is in the clouds, lost in thought, commented out ... a green text ... con-text ... I do not see. Not negated, but neither in head nor body.";
		//how can I change these ruminating thoughts "... a green text ... con-text ... I do not see. Not negated, but neither in head nor body.";
		conscious.classList.add("unbalanced");
		//a new "unbalanced" class disorients
	} else if (count >=3) {
		// counting variable goes on and on and on. Is it larger than or equal to 3? Thoughts return, unescaping to the start
		conscious.innerHTML = "When will it all click, a clicking clarity of insight";
		count = 0;
		// Zero, a number shaped to mock me in my counting circles, around and around and around. If my conscious remains unbalanced, remove this thought
		if (conscious.classList.contains("unbalanced")) {
			conscious.classList.remove("unbalanced");
		}
	} else {
		// but, if neither stay true, then :
		conscious.innerHTML = "my head is in the ground";
		if (conscious.classList.contains("unbalanced")) {
			conscious.classList.remove("unbalanced");
		}
	}
}
