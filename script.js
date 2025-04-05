document.addEventListener("DOMContentLoaded", function () {
    // --- Survival Correlation Data (Keep as is) ---
    const survivalByEmbarked = {
        "C": 0.553571, "Q": 0.389610, "S": 0.339009
    };
    const survivalByPclass = {
        "1": 0.629630, "2": 0.472826, "3": 0.242363
    };
    const survivalBySex = {
        "female": 0.742038, "male": 0.188908
    };
    const survivalByFamilySize = {
        "Alone": 0.303538, "Large": 0.161290, "Small": 0.578767
    };

    // --- Check which page is loaded ---

    // --- Handle index.html (Form Page - Keep as is) ---
    if (document.getElementById("predictButton")) {
        document.getElementById("predictButton").addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page refresh

            // Collect input values
            const userName = document.getElementById("userName").value.trim();
            const pClass = document.getElementById("passengerClass").value;
            const sex = document.getElementById("sex").value;
            const age = document.getElementById("age").value;
            const sibsp = document.getElementById("sibsp").value;
            const parch = document.getElementById("parch").value;
            const embarkation = document.getElementById("embarkation").value;

            // Validate input
            if (!userName || !pClass || !sex || !age || !embarkation) {
                alert("Please fill in all required fields.");
                return;
            }

            // Compute survival probability
            let survivalScore = 0;
            survivalScore += survivalByPclass[pClass] || 0;
            survivalScore += survivalBySex[sex.toLowerCase()] || 0;
            survivalScore += survivalByEmbarked[embarkation] || 0;

            let familySize = parseInt(sibsp) + parseInt(parch);
            let familyCategory;
            if (familySize === 0) familyCategory = "Alone";
            else if (familySize > 3) familyCategory = "Large";
            else familyCategory = "Small";
            survivalScore += survivalByFamilySize[familyCategory] || 0;

            // Determine prediction
            let prediction = (survivalScore / 4 > 0.5) ? "Survived" : "Not Survived";

            // Redirect with name and result parameters
            window.location.href = `result.html?name=${encodeURIComponent(userName)}&result=${encodeURIComponent(prediction)}`;
        });
    }

    // --- Handle result.html (Result Page - MODIFIED SECTION) ---
    if (document.getElementById("result")) {
        const urlParams = new URLSearchParams(window.location.search);
        const survivalResult = urlParams.get("result");
        const userName = urlParams.get("name"); // *** GET THE USERNAME ***

        // --- Update the Heading ---
        const headingElement = document.getElementById("result-heading"); // Get heading by ID
        if (headingElement && userName) { // Check if heading and username exist
            // Decode name in case of spaces etc. (%20 -> space)
            const decodedUserName = decodeURIComponent(userName);
            // Set the heading text
            headingElement.textContent = `${decodedUserName}'s Survival Prediction Result`;
        } else if (headingElement) {
             // Optional: Keep default if no name is passed
             headingElement.textContent = "Titanic Survival Prediction Result";
        }
        // --- End Heading Update ---


        // Display the prediction result in the paragraph
        const resultParagraph = document.getElementById("result"); // Get paragraph element
        if (resultParagraph) { // Check if paragraph exists
             resultParagraph.innerText = survivalResult ? `Prediction: ${survivalResult}` : "Prediction: No result found.";
        }

        // You could also update the image placeholder based on the result here
        const imagePlaceholder = document.querySelector('.Empty');
         if (imagePlaceholder && survivalResult) {
            if (survivalResult === "Survived") {
                imagePlaceholder.innerHTML = '<span>🎉 You Survived!</span>'; // Example image/text
                // Or set background image: imagePlaceholder.style.backgroundImage = "url('images/survived.jpg')";
            } else {
                imagePlaceholder.innerHTML = '<span>😢 You Did Not Survive... </span>'; // Example image/text
                // Or set background image: imagePlaceholder.style.backgroundImage = "url('images/not_survived.jpg')";
            }
         } else if (imagePlaceholder) {
             imagePlaceholder.textContent = "(Image Area)"; // Default if no result
         }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const ageInput = document.getElementById("age");
    const warningMessage = document.createElement("p");
    warningMessage.style.color = "red";
    ageInput.parentNode.appendChild(warningMessage);

    ageInput.addEventListener("input", function () {
        let age = parseInt(ageInput.value, 10);

        if (isNaN(age)) {
            warningMessage.textContent = "";
            ageInput.value = "";
        } else if (age > 80) {
            warningMessage.textContent = "Warning: Age cannot exceed 80!";
            ageInput.value = 80;
        } else if (age < 5) {
            warningMessage.textContent = "Warning: Age cannot be less than 5!";
            ageInput.value = 5;
        } else {
            warningMessage.textContent = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sibspInput = document.getElementById("sibsp");
    const warningMessage = document.createElement("p");
    warningMessage.style.color = "red";
    sibspInput.parentNode.appendChild(warningMessage);

    sibspInput.addEventListener("input", function () {
        let age = parseInt(sibspInput.value, 10);

        if (isNaN(age)) {
            warningMessage.textContent = "";
            ageInput.value = "";
        } else if (sibsp > 5) {
            warningMessage.textContent = "Warning: sibsp cannot exceed 5!";
            ageInput.value = 80;
        } else {
            warningMessage.textContent = "";
        }
    });
});