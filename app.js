const role = ["Mage", "Hunter", "Warrior", "Priest"];

const healthDisplay = document.getElementById("heroHealth");
const attackDisplay = document.getElementById("heroAttack");
const defenseDisplay = document.getElementById("heroDefense");
const ageDisplay = document.getElementById("heroAge");
const classDisplay = document.getElementById("heroClass");

const classImageDisplay = document.getElementById("classImage");

let health = 0;
let attack = 0;
let defense = 0;
let age = 0;

let roll = 0;

function createCharacter() {
  health = Math.floor(Math.random() * (200 - 100) + 100);

  attack = Math.floor(Math.random() * (30 - 1)) + 1;

  defense = Math.floor(Math.random() * (30 - 1)) + 1;

  age = Math.floor(Math.random() * (60 - 15)) + 15;

  roll = Math.floor(Math.random() * 3);

  healthDisplay.textContent = health;
  attackDisplay.textContent = attack;
  defenseDisplay.textContent = defense;
  ageDisplay.textContent = age;
  classDisplay.textContent = role[roll];

  console.log(role[roll]);

  switch (role[roll]) {
    case "Mage":
      classImageDisplay.src = "images/icons8-mage-staff-30.png";
      break;
    case "Hunter":
      classImageDisplay.src = "images/icons8-archers-bow-50.png";
      break;
    case "Warrior":
      classImageDisplay.src = "images/icons8-sword-30.png";
      break;
    case "Priest":
      classImageDisplay.src = "images/icons8-christian-cross-30.png";
      break;
  }
}
