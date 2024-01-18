let trigger = document.querySelector(".button");
trigger.addEventListener("click", generatePoem);

function generatePoem(response) {
  response.preventDefault();
  let text = document.querySelector("div");
  text.innerHTML = "This is your poem";
}
