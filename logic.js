const levels = [
    {
        answer: "Годы Великого бедствия",
        images: ["images/pic1_1.jpg", "images/pic2_1.jpg", "images/pic3_1.jpg", "images/pic4_1.jpg"],
        blanks: ["_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_"]
    },
    {
        answer: "Материальная культура",
        images: ["images/pic1_2.jpg", "images/pic2_2.jpg", "images/pic3_2.jpg", "images/pic4_2.jpg"],
        blanks: ["_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_" ]
    },
    {
        answer: "Саки",
        images: ["images/pic1_3.jpg", "images/pic2_3.jpg", "images/pic3_3.jpg", "images/pic4_4.jpg", "images/pic5_4.jpg"],
        blanks: ["_", "_", "_","_" ]
    },
    {
        answer: "восстание Кенесары",
        images: ["images/pic1_4.jpg", "images/pic2_4.jpg", "images/pic3_4.jpg", "images/pic4_4.jpg"],
        blanks: ["_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_" ]
    },
    {
        answer: "Закон",
        images: ["images/pic1_5.jpg", "images/pic2_5.jpg"],
        blanks: ["_", "_", "_","_","_"]
    },
    {
        answer: "Колонизация Китая",
        images: ["images/pic1_6.jpg", "images/pic2_6.jpg", "images/pic3_6.jpg", "images/pic4_6.jpg"],
        blanks: ["_", "_", "_","_", "_", "_","_", "_", "_","_", "_", "_","_", "_","_","_","_" ]
    },
    {
        answer: "Тюрки",
        images: ["images/pic1_7.jpg", "images/pic2_7.jpg", "images/pic3_7.jpg", "images/pic4_7.jpg"],
        blanks: ["_", "_", "_","_","_"]
    },
    // More levels here
  ];
  
  function displayLevel(level) {
    // Clear the previous level
    document.getElementById("images").innerHTML = "";
    document.getElementById("blanks").innerHTML = "";
    document.getElementById("letters").innerHTML = "";
  
    // Display the images
    level.images.forEach(image => {
      const img = document.createElement("img");
      img.src = image;
      document.getElementById("images").appendChild(img);
    });
  
    // Display the blanks
    level.blanks.forEach((blank, index) => {
      const span = document.createElement("span");
      span.textContent = blank;
      document.getElementById("blanks").appendChild(span);
    });
  
    // Create the letters
    const letters = level.answer.split(" ");
    const usedLetters = new Set();
    letters.forEach(letter => {
      if (letter !== " ") {
        usedLetters.add(letter.toLowerCase());
      }
    });
  
    const russianAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    russianAlphabet.split("").forEach(letter => {
      if (!usedLetters.has(letter)) {
        const button = document.createElement("button");
        button.textContent = letter.toUpperCase();
        button.onclick = () => insertLetter(letter, level);
        document.getElementById("letters").appendChild(button);
      }
    });
  }
  
  
  function insertLetter(letter, level) {
    const blanks = document.getElementsByTagName("span");
    const letters = level.answer.split("");
  
    let correct = true;
    for (let i = 0; i < letters.length; i++) {
      if (i === blanks.length) break;
      if (letters[i] !== " " && letters[i].toLowerCase() === letter.toLowerCase()) {
        blanks[i].textContent = letters[i];
      }
      if (letters[i] !== blanks[i].textContent) {
        correct = false;
      }
    }
  
    if (correct) {
      // Move to the next level
      currentLevel++;
      if (currentLevel < levels.length) {
        displayLevel(levels[currentLevel]);
      } else {
        // Show congrats page
        window.location.href = "congrats.html";
      }
    }
  }
  
  
  function getHint() {
    // Display a hint
    alert("Hint for level " + (currentLevel + 1));
  
    // Move to the next level
    currentLevel++;
    if (currentLevel < levels.length) {
      displayLevel(levels[currentLevel]);
    } else {
      // Show congrats page
      window.location.href = "congrats.html";
    }
  }
  
  
  let currentLevel = 0;
  displayLevel(levels[currentLevel]);
  