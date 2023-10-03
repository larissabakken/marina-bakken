import React, { useState } from "react";

export default function Quiz() {
  const questions = [
    "Você está pronta?",
    "...",
    "Astrid's socks are good for?...",
    "too much",
    "A good phrase for an action figure.",
    "A good idea for a family tattoo.",
    "...",
    "...",
  ];

  const images = [
    null,
    "luffy.webp",
    null,
    null,
    null,
    null,
    "jack.png",
    "zelda.png",
  ];

  const answers = [
    "sim",
    "luffy",
    "To blow your nose",
    "hot dog",
    "i love you",
    "stitch",
    "The Nightmare Before Christmas",
    "The Legend of Zelda: Tears of the Kingdom",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSubmit = () => {
    if (currentQuestion < questions.length - 1) {
      const userAnswer = answer.toLowerCase();
      const correctAnswer = answers[currentQuestion].toLowerCase();

      if (userAnswer === correctAnswer) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswer("");
      } else {
        setCurrentQuestion(0);
        setAnswer("");
      }
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto">
      {showResult ? (
        <div className={"text-purple-600"}>
          <h2 className="text-xl font-semibold mb-4">
            Congratulations, you have completed the challenge!
          </h2>
          <a
            href={
              "https://docs.google.com/document/d/1nA13Pkom29QR22tXY2LDKmsj_OfikmZe3JT1P8Ztfoo/edit?usp=sharing"
            }
            target={"_blank"}
          >
            CLICK HERE!
          </a>
        </div>
      ) : (
        <>
          <h1 className="text-xl text-gray-600">Puzzles</h1>
          <p className="text-gray-600 mb-6">
            Answer the questions below correctly to complete the challenge,
            remembering that if you get an answer wrong, you will go back to the
            beginning of the quiz. So your first tip is: write down the correct
            answers somewhere!
          </p>
          <h3 className="text-lg font-semibold mb-4 text-gray-600">
            {questions[currentQuestion]}
          </h3>
          {images[currentQuestion] && (
            <img
              src={images[currentQuestion]}
              alt={`Imagem da pergunta ${currentQuestion + 1}`}
              className="mb-4 h-[30rem]"
            />
          )}
          <input
            type="text"
            placeholder="Sua resposta..."
            className="w-full px-3 py-2 border rounded-md mb-4 text-gray-600"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <div className="mb-4">
            <progress
              className="w-full h-3 bg-gray-200 rounded-full"
              value={currentQuestion}
              max={questions.length}
            />
            <p className="text-gray-600 text-sm mt-1">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={handleAnswerSubmit}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
