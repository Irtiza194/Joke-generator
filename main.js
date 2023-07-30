"use strict";
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const url = "https://v2.jokeapi.dev/joke/Any";

const generate = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if the response is successful and has a joke to display
    if (data.type === "single") {
      output.innerHTML = data.joke;
    } else if (data.type === "twopart") {
      output.innerHTML = `${data.setup}<br>${data.delivery}`;
    } else {
      output.innerHTML = "Failed to fetch joke. Please try again later.";
    }
  } catch (error) {
    output.innerHTML =
      "An error occurred while fetching the joke. Please try again later.";
  }
};
btn.addEventListener("click", generate);
