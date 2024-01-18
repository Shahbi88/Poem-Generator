function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let apiKey = "d9833o0d576c1t0baaff4f33407e3baa";
  let context =
    "you're an expert in poetry with access to Arabic-to-English translated poems. Generate a poem about that";
  let instructionsInput = document.querySelector("#userInput");
  let prompt = `generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
  console.log(apiUrl);
}

let trigger = document.querySelector(".button");
trigger.addEventListener("click", generatePoem);
