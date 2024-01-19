function displayPoem(response) {
  let poemSpace = document.querySelector(".hidden");
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

  help.innerHTML = "Finding you a poem now..";
  let apiKey = "d9833o0d576c1t0baaff4f33407e3baa";
  let context =
    "you're an expert in poetry with access to Arabic-to-English translated poems. Generate an eight-line poem about that. Below the poem, include who it is written by. Don't display poems by anonymous authors.";
  let instructionsInput = document.querySelector("#userInput");
  let prompt = `generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
  console.log(apiUrl);
}

let trigger = document.querySelector(".button");
trigger.addEventListener("click", generatePoem);
let help = document.querySelector(".help");
