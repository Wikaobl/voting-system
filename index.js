const votingForm = document.querySelector(".voting-form");
const voteOptions = document.querySelector(".vote-options");
const userName = document.querySelector(".user-name");
const userID = document.querySelector(".user-id");
const resultDiv = document.querySelector(".vote-results");

const validUserIds = new Map([
  ["Romuś", "12345678"],
  ["Stasio", "11111111"],
  ["Barti", "12341234"],
  ["Dżastina", "00000001"],
]);

const voteCounts = new Map();
voteCounts.set("Opcja 1", 0);
voteCounts.set("Opcja 2", 0);
voteCounts.set("Opcja 3", 0);

const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  //Logikę

  updateResults();
};

const updateResults = () => {
  let output = "";
  for (const [option, count] of voteCounts) {
    output += `${option} : ${count} głosów.`;
  }
  resultDiv.innerHTML = output;
};

votingForm.addEventListener("submit", voting);
