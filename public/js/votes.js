const upvoteHandler = async (event) => {
  event.preventDefault();

  const thisJoke = event.currentTarget;
  let jokeId = thisJoke.querySelector("#jokeId").textContent;
  let uppedJoke = thisJoke.querySelector("#upvoteScore").textContent;
  console.log(jokeId);
  console.log(uppedJoke);

  const response = await fetch(`/api/jokes/up/${jokeId}`, {
    method: "PUT",
    body: JSON.stringify({ id: jokeId }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
    // let currentCount = parseInt(uppedJoke);
    // uppedJoke = currentCount++;
  }
};

const downvoteHandler = async (event) => {
  event.preventDefault();

  const thisJoke = event.currentTarget;
  let jokeId = thisJoke.querySelector("#jokeId").textContent;
  let downedJoke = thisJoke.querySelector("#downvoteScore").textContent;
  console.log(jokeId);
  console.log(downedJoke);

  const response = await fetch(`/api/jokes/down/${jokeId}`, {
    method: "PUT",
    body: JSON.stringify({ id: jokeId }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload();
    // let currentCount = parseInt(downedJoke);
    // downedJoke = currentCount--;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll("#jokeCard");
  cards.forEach((card) => {
    card.addEventListener("click", function (event) {
      if (event.target.matches("#upVote")) {
        upvoteHandler(event);
      } else if (event.target.matches("#downVote")) {
        downvoteHandler(event);
      }
    });
  });
});
