/* =====================================================
   BESTIE QUIZ
   ===================================================== */


/*
   CHANGE THE QUESTIONS AND ANSWERS HERE
   TO YOUR OWN PRIVATE MEMORIES.
*/


const questions = [

  {
    question: "What do we do the most together? 😏",

    answers: [
      "Studying 📚",
      "Gossiping 🗣️",
      "Sleeping 😴",
      "Fighting 😂"
    ],

    correct: 1
  },


  {
    question: "What is our special sign? 😏",

    answers: [
      "FRND",
      "DAII",
      "EDAII",
      "HELLO"
    ],

    correct: 0
  },


  {
    question: "What do we have the most? 😂",

    answers: [
      "Serious conversations",
      "Gossip talks 🗣️",
      "Silence",
      "Arguments"
    ],

    correct: 1
  },


  {
    question: "What is my birthday date? 🥰",

    answers: [
      "Oct 20",
      "March 26",
      "Oct 26",
      "I don't know"
    ],

    correct: 2
  },


  {
    question: "How you call me? ❤️",

    answers: [
      "Muru 😎",
      "Someone else",
      "Charm ❤️",
      "I forgot 😭"
    ],

    correct: 2
  }

];



/* =====================================================
   QUIZ VARIABLES
   ===================================================== */

let currentQuestion = 0;



const quizScreen =
  document.getElementById("quizScreen");


const mainWebsite =
  document.getElementById("mainWebsite");


const questionNumber =
  document.getElementById("questionNumber");


const questionText =
  document.getElementById("question");


const answersBox =
  document.getElementById("answers");


const quizMessage =
  document.getElementById("quizMessage");



/* =====================================================
   SHOW QUESTION
   ===================================================== */

function showQuestion() {


  const q =
    questions[currentQuestion];


  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;


  questionText.textContent =
    q.question;


  answersBox.innerHTML = "";


  quizMessage.textContent = "";



  q.answers.forEach((answer, index) => {


    const button =
      document.createElement("button");


    button.className =
      "answer-button";


    button.textContent =
      answer;


    button.addEventListener(
      "click",
      () => {

        checkAnswer(index);

      }
    );


    answersBox.appendChild(button);


  });

}



/* =====================================================
   CHECK ANSWER
   ===================================================== */

function checkAnswer(selectedAnswer) {


  const correctAnswer =
    questions[currentQuestion].correct;



  if (selectedAnswer === correctAnswer) {


    quizMessage.textContent =
      "Correct! 🩵✨";


    quizMessage.className =
      "correct-message";



    setTimeout(() => {


      currentQuestion++;



      if (
        currentQuestion <
        questions.length
      ) {


        showQuestion();


      }

      else {


        unlockWebsite();

      }


    }, 700);


  }


  else {


    quizMessage.textContent =
      "Adei! Think again 😂❤️";


    quizMessage.className =
      "wrong-message";


  }

}



/* =====================================================
   UNLOCK WEBSITE
   ===================================================== */

function unlockWebsite() {

  // Remember only during this browser session
  sessionStorage.setItem("quizCompleted", "true");

  quizScreen.classList.add("hidden");

  mainWebsite.classList.remove("hidden");

  hearts(30);

}

/* =====================================================
   CHECK QUIZ STATUS
   ===================================================== */

if (sessionStorage.getItem("quizCompleted") === "true") {

  // Refresh → directly show website

  quizScreen.classList.add("hidden");

  mainWebsite.classList.remove("hidden");

} else {

  // New session → show quiz

  showQuestion();

}




/* =====================================================
   FLOATING HEARTS
   ===================================================== */

function hearts(n = 20) {


  for (let i = 0; i < n; i++) {


    const h =
      document.createElement("div");


    h.className =
      "floating-heart";


    h.textContent =
      [
        "❤️",
        "💗",
        "💖",
        "💕",
        "✨"
      ][
        Math.floor(
          Math.random() * 5
        )
      ];


    h.style.left =
      Math.random() * 100 + "vw";


    h.style.fontSize =
      (
        14 +
        Math.random() * 22
      ) + "px";


    h.style.animationDelay =
      (
        Math.random() * 1.5
      ) + "s";


    document
      .getElementById("hearts")
      .appendChild(h);



    setTimeout(() => {

      h.remove();

    }, 6500);


  }

}



/* =====================================================
   GIFT BUTTON
   ===================================================== */

const gift =
  document.getElementById("gift");


const letter =
  document.getElementById("letter");



gift.addEventListener(
  "click",
  () => {


    hearts(35);


    gift.style.transform =
      "scale(1.2) rotate(3deg)";


    setTimeout(() => {

      gift.style.transform = "";

    }, 400);



    letter.scrollIntoView({

      behavior: "smooth"

    });


  }
);




/* =====================================================
   CONFETTI
   ===================================================== */

function confetti() {


  for (let i = 0; i < 100; i++) {


    const c =
      document.createElement("div");


    c.className =
      "confetti";


    c.style.left =
      Math.random() * 100 + "vw";


    c.style.background =
      `hsl(
        ${Math.random() * 360},
        90%,
        60%
      )`;


    c.style.animationDelay =
      Math.random() * 1.5 + "s";


    document.body.appendChild(c);



    setTimeout(() => {

      c.remove();

    }, 4500);


  }

}



document
  .getElementById("confetti")
  .addEventListener(
    "click",
    confetti
  );




/* =====================================================
   MUSIC PLAYER
   ===================================================== */

const music =
  document.getElementById("music");


const musicBtn =
  document.getElementById("musicBtn");


const musicPlayer =
  document.querySelector(
    ".music-player"
  );



musicBtn.addEventListener(
  "click",
  async () => {


    try {


      if (music.paused) {


        await music.play();


        musicBtn.textContent =
          "⏸";


        musicPlayer.classList.add(
          "playing"
        );


      }


      else {


        music.pause();


        musicBtn.textContent =
          "▶";


        musicPlayer.classList.remove(
          "playing"
        );


      }


    }


    catch (error) {


      alert(
        "Please upload music.mp3 to your website."
      );


    }


  }
);




/* =====================================================
   AUTOMATIC HEARTS
   ===================================================== */

setInterval(
  () => {

    hearts(1);

  },
  1800
);
