const submitHandler = async (event) => {
    event.preventDefault();

    const joke = document.querySelector("#jokeSubmission").value;

    if (joke){
        if (joke !== "Enter your joke here") {
            const response = await fetch("/api/jokes/", {
                method: "POST",
                body: JSON.stringify({ joke}),
                headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            alert("Created Joke");
          } else {
            alert("Failed to log in");
          }
        };
    };
   
};

document
  .querySelector(".submit-form")
  .addEventListener("submit", submitHandler);