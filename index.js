function displayPoem(response) {
  poemSpace.classList.remove("hidden");
  poemSpace.classList.add("poem");
  help.innerHTML = "";
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
  poemSpace.classList.add("hidden");
}

function generatePoem(event) {
  event.preventDefault();
  poemSpace.innerHTML = null;
  help.innerHTML = "Finding you a poem now..";
  let apiKey = "d9833o0d576c1t0baaff4f33407e3baa";
  let context =
    "you're an expert in poetry with access to exclusively Arabic poems that are translated into English. Generate an eight-line poem about that. Below the poem, include who it is written by. Add -Written by: in a new line after the poem, use a line break. Do not use poems by anonymous or unknown authors. Make your result choices gender-balanced but don't mention the gender of the poet in your credit section.Include poems by poets who are men, women and gender-queer";
  let instructionsInput = document.querySelector(".userInput");
  let prompt = `generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);

  console.log(apiUrl);
}
let poemSpace = document.querySelector(".hidden");
let trigger = document.querySelector(".button");
trigger.addEventListener("click", generatePoem);
let help = document.querySelector(".help");
