let privacy = document.getElementById("protected-class");

let count = 0;

window.addEventListener("click", theBillofRights)

function theBillofRights() {

	count++
	console.log(count)

	if (privacy.innerHTML === "cast into darkness fundamental rights illuminated in the Constitution's penumbra") {

        privacy.innerHTML = "THE SHADOW DOCKET";


		privacy.classList.add("impunity");

    } else if (count >=3) {

		privacy.innerHTML = "cast into darkness fundamental rights illuminated in the Constitution's penumbra";
		count = 0;

		if (privacy.classList.contains("impunity")) {
			privacy.classList.remove("impunity");
		}
	} else {

        privacy.innerHTML = "unsigned majority opinions obscure accountability";
		if (privacy.classList.contains("impunity")) {
			privacy.classList.remove("impunity");
		}
	}
}

// Where does privacy find protection?
// The Court waits and Wades into seen
// Amendments like Peter Pan
// Reconnecting with one's ever-present silhouette
// One's essential self
// Row 
// Roe 
// Row Home
// Home Row
// The treasured source tucked away at Home
// Illuminated on Command 