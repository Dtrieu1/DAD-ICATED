const upvoteHandler = async (event) => {
  event.preventDefault();

  const jokeId = document.querySelector(".jokeId");
  const uppedJoke = document.querySelector(".upvoteScore");

  const response = await fetch("/api/jokes/up/:id", {
    method: "PUT",
    body: JSON.stringify({ jokeId }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    uppedJoke = document.querySelector(".upvoteScore").value++;
  }
};

const downvoteHandler = async (event) => {
  event.preventDefault();

  const jokeId = document.querySelector(".jokeId");
  const downedJoke = document.querySelector(".downvoteScore");

  const response = await fetch("/api/jokes/down/:id", {
    method: "PUT",
    body: JSON.stringify({ jokeId }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    downedJoke = document.querySelector(".downvoteScore").value--;
  }
};

document.querySelector(".upVote").addEventListener("click", upvoteHandler);

document.querySelector(".downVote").addEventListener("click", downvoteHandler);
