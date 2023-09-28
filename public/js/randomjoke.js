const upvoteHandler = async (event) => {
  event.preventDefault();

  const jokeId = document.querySelector(".jokeId");
  const uppedJoke = document.querySelector(".upvoteScore");

  const response = await fetch("/api/random", {
    method: "GET",
    body: JSON.stringify({ jokeId }),
    headers: { "Content-Type": "application/json" },
  });
};
