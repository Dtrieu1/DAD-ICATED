const submitHandler = async (event) => {
  event.preventDefault();

  const joke = document.querySelector("#jokeSubmission").value;

  if (joke) {
    if (joke !== "Enter your joke here") {
      const response = await fetch("/api/jokes/", {
        method: "POST",
        body: JSON.stringify({ joke }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/");
      }
    }
  }
};

document
  .querySelector(".submit-form")
  .addEventListener("submit", submitHandler);
