const gameText = document.getElementById('game-text');
const gameImage = document.getElementById('game-image');
const choices = document.getElementById('choices');

let currentScene = 0;

function startGame() {
  currentScene = 0;
  showScene();
}

function showScene() {
  choices.innerHTML = ''; // Reset choices
  switch (currentScene) {
    case 0:
      gameImage.innerHTML = `<img src="https://i.imgur.com/1Q9Z1Zm.png" alt="Ninja Dorf">`;
      gameText.innerHTML = `
        Du bist Kai, der rote Ninja mit der Kraft des Feuers. Heute ist ein besonderer Tag im Dorf der Ninjas.
        Du wachst früh auf und fühlst dich bereit für ein Abenteuer.
        Was möchtest du tun?
      `;
      addChoice('Zum Trainingsplatz gehen ⚔️', () => {
        currentScene = 1;
        showScene();
      });
      addChoice('Mit Freunden treffen 🤝', () => {
        currentScene = 2;
        showScene();
      });
      addChoice('Den mysteriösen Berg erkunden 🏔️', () => {
        currentScene = 3;
        showScene();
      });
      break;

    // Weitere Szenen hier hinzufügen...

    case 1:
      gameImage.innerHTML = `<img src="https://i.imgur.com/J5qYVxS.png" alt="Trainingsplatz">`;
      gameText.innerHTML = `
        Auf dem Trainingsplatz triffst du Meister Wu. Er bietet dir eine neue Technik an, aber nur, wenn du eine mutige Aufgabe bewältigst.
        Was wirst du tun?
      `;
      addChoice('Die Herausforderung annehmen 💪', () => {
        currentScene = 4;
        showScene();
      });
      addChoice('Nach Hilfe fragen 🗣️', () => {
        currentScene = 5;
        showScene();
      });
      addChoice('Ablehnen und zum Dorf zurückkehren 🚶', () => {
        currentScene = 6;
        showScene();
      });
      break;

    case 2:
      gameImage.innerHTML = `<img src="https://i.imgur.com/YZdvDSh.png" alt="Freunde treffen">`;
      gameText.innerHTML = `
        Deine Freunde Jay und Nya haben unterschiedliche Pläne für den Tag.
        Jay möchte zum Fluss, Nya möchte einen Drachen suchen.
        Wie entscheidest du dich?
      `;
      addChoice('Mit Jay zum Fluss gehen 🌊', () => {
        currentScene = 7;
        showScene();
      });
      addChoice('Mit Nya den Drachen suchen 🐉', () => {
        currentScene = 8;
        showScene();
      });
      addChoice('Vorschlagen, zusammen etwas anderes zu machen 🤔', () => {
        currentScene = 9;
        showScene();
      });
      break;

    case 3:
      gameImage.innerHTML = `<img src="https://i.imgur.com/0Z8Yk9m.png" alt="Mysteriöser Berg">`;
      gameText.innerHTML = `
        Der mysteriöse Berg ist von Nebel umhüllt. Es heißt, dort lebt ein weiser alter Ninja.
        Was tust du?
      `;
      addChoice('Den Berg hinaufsteigen 🧗', () => {
        currentScene = 10;
        showScene();
      });
      addChoice('Den alten Ninja rufen 📣', () => {
        currentScene = 11;
        showScene();
      });
      addChoice('Zurück zum Dorf gehen 🏡', () => {
        currentScene = 12;
        showScene();
      });
      break;

    // Szenen 4 bis 12 erweitern...

    // Beispiel für eine erweiterte Szene
    case 4:
      gameImage.innerHTML = `<img src="https://i.imgur.com/TYpT1kL.png" alt="Herausforderung">`;
      gameText.innerHTML = `
        Meister Wu stellt dir eine Aufgabe: Du musst den goldenen Schlüssel aus der Tigerhöhle holen.
        Wie gehst du vor?
      `;
      addChoice('Vorsichtig hineinschleichen 🐾', () => {
        currentScene = 13;
        showScene();
      });
      addChoice('Den Tiger herausfordern 🐯', () => {
        currentScene = 14;
        showScene();
      });
      addChoice('Mit dem Tiger verhandeln 🗨️', () => {
        currentScene = 15;
        showScene();
      });
      break;

    // Weitere erweiterte Szenen
    case 13:
      gameImage.innerHTML = `<img src="https://i.imgur.com/aY9X9bT.png" alt="Tigerhöhle">`;
      gameText.innerHTML = `
        Du schleichst dich leise in die Höhle. Der Tiger schläft tief und fest.
        Du siehst den goldenen Schlüssel funkeln.
        Was tust du?
      `;
      addChoice('Den Schlüssel leise nehmen 🔑', () => {
        currentScene = 16;
        showScene();
      });
      addChoice('Den Tiger wecken 🐅', () => {
        currentScene = 17;
        showScene();
      });
      break;

    // Fortsetzung...

    case 16:
      gameImage.innerHTML = `<img src="https://i.imgur.com/6hYJ9Kc.png" alt="Schlüssel erhalten">`;
      gameText.innerHTML = `
        Du nimmst den Schlüssel erfolgreich, ohne den Tiger zu wecken!
        Zurück bei Meister Wu lobt er deine Geschicklichkeit.
        Du erlernst die Technik des Feuerschwerts! 🔥🗡️
      `;
      endGame('Gewonnen! 🎉 Du hast das Abenteuer erfolgreich gemeistert.');
      break;

    // Weitere Enden hinzufügen...

    default:
      gameText.innerHTML = 'Das Abenteuer ist hier zu Ende. Möchtest du noch einmal spielen?';
      gameImage.innerHTML = '';
      endGame();
      break;
  }
}

function addChoice(text, action) {
  const button = document.createElement('button');
  button.innerText = text;
  button.classList.add('choice-button');
  button.onclick = action;
  choices.appendChild(button);
}

function endGame(message) {
  choices.innerHTML = ''; // Reset choices
  if (message) {
    gameText.innerHTML = message;
  }
  const restartButton = document.createElement('button');
  restartButton.innerText = 'Nochmal spielen 🔄';
  restartButton.classList.add('choice-button');
  restartButton.onclick = () => {
    startGame();
  };
  choices.appendChild(restartButton);
}

startGame();
