const users = new Map([
  ["x", "12345678"],
  ["y", "11223344"],
  ["test", "00000000"],
]);

const votes = new Map();

votes.set("opcja 1", 0);
votes.set("opcja 2", 0);
votes.set("opcja 3", 0);
votes.set("opcja 4", 0);

const usersAlreadyVoted = new Set();

const voteForm = document.querySelector(".vote-form"); // formularz
const voteOptions = document.querySelector(".vote-options"); // opcje
const userName = document.querySelector(".user-name"); // input dla nazwy użytkownika
const userID = document.querySelector(".user-id"); // input dla identyfikatora użytkownika
const resultsDiv = document.querySelector(".vote-results"); // div gdzie będą wyniki głosowania

const updateResults = () => {
  let output = "";

  for (const [option, count] of votes) {
    output += `${option} : ${count}  głosów<br>`; // Dla każdej pary klucz-wartość budujemy <p> z treścią
  }
  resultsDiv.innerHTML = output;
};
updateResults();

const getVote = (e) => {
  e.preventDefault();

  const user = userName.value;
  const password = userID.value;
  const answer = voteOptions.value;

  if (users.has(user)) {
    if (users.get(user) !== password) {
      alert("Nieprawidłowe hasło.");
    }

    if (usersAlreadyVoted.has(user)) {
      alert("Już zagłosowałeś. Dziękujemy.");
    } else {
      usersAlreadyVoted.add(user);
      console.log(usersAlreadyVoted);

      votes.set(answer, votes.get(answer) + 1);
    }
  } else {
    alert("Nieprawidłowe dane.");
  }

  updateResults();
};

voteForm.addEventListener("submit", getVote);
