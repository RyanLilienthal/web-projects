let conscious = document.getElementById("freudian-script");

let count = 0;

window.addEventListener("click", theConsciousIs)

function theConsciousIs() {

	count++
	console.log(count)

	if (conscious.innerHTML === "my head is in the ground") {

        conscious.innerHTML = "perhaps it is in the clouds, lost in thought, commented out ... a green text ... con-text ... I do not see. Not negated, but neither in head nor body.";

		conscious.classList.add("unbalanced");

    } else if (count >=3) {

		conscious.innerHTML = "When will it all click, a clicking clarity of insight";
		count = 0;

		if (conscious.classList.contains("unbalanced")) {
			conscious.classList.remove("unbalanced");
		}
	} else {

        conscious.innerHTML = "my head is in the ground";
		if (conscious.classList.contains("unbalanced")) {
			conscious.classList.remove("unbalanced");
		}
	}
}
