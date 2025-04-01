document.addEventListener("DOMContentLoaded", function () {
    // Check which page is loaded
    if (document.getElementById("predictButton")) {
        // Handle index.html (Form Page)
        document.getElementById("predictButton").addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page refresh
  
            // Collect input values
            const pClass = document.getElementById("passengerClass").value;
            const sex = document.getElementById("sex").value;
            const age = document.getElementById("age").value;
            const sibsp = document.getElementById("sibsp").value;
            const parch = document.getElementById("parch").value;
            const embarkation = document.getElementById("embarkation").value;
  
            // Validate input (Ensure required fields are filled)
            if (!pClass || !sex || !age || !embarkation) {
                alert("Please fill in all required fields.");
                return;
            }
  
            // Dummy Prediction Logic (Replace this with actual model)
            let prediction = "Not Survived";
            if (pClass === "1" && sex === "Female") {
                prediction = "Survived";
            }
  
            // Redirect to results page with the prediction as URL parameter
            window.location.href = `result.html?result=${encodeURIComponent(prediction)}`;
        });
    }
  
    if (document.getElementById("result")) {
        // Handle result.html (Result Page)
        const urlParams = new URLSearchParams(window.location.search);
        const survivalResult = urlParams.get("result");
  
        // Display the result
        document.getElementById("result").innerText = survivalResult ? survivalResult : "No result found.";
    }
  });