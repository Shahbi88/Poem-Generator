let trigger = document.querySelector(".button");
trigger.addEventListener("click", generatePoem);

function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["This is your poem"],
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}
