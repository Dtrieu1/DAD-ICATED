const submitHandler = async (event) => {
    event.preventDefault();

    const jokeText = document.querySelector("#jokeSubmission");

    if (jokeText){
        if (jokeText !== "Enter your joke here") {
            const response = await fetch("/api/jokes/", {
                method: "POST",
                body: JSON.stringify({ jokeText }),
                headers: { "Content-Type": "application/json" },
          });
        };
    };
   
};

document
  .querySelector(".submit-form")
  .addEventListener("submit", signupFormHandler);