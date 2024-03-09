import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import NextButton from "./components/NextButton";
import PrevButton from "./components/PrevButton";
import Mercury from "./assets/mercury.png";
import Earth from "./assets/earth.png";
import Mars from "./assets/mars.png";
import Jupiter from "./assets/jupiter.png";
import Saturn from "./assets/saturn.png";
import Uranus from "./assets/uranus.png";
import Neptune from "./assets/neptune.png";

const problems: {
  prompt?: string;
  question: string;
  answer: string;
  image?: string;
}[] = [
  {
    prompt: "Guess the planet!",
    question: "Which planet is known as the Red Planet?",
    answer: "Answer: Mars",
  },
  {
    prompt: "Guess the number!",
    question: "How many planets are in the solar system?",
    answer: "Answer: 8",
  },
  {
    prompt: "Guess the planet!",
    question: "Which planet is known for its great red spot?",
    answer: "Answer: Jupiter",
  },
  {
    prompt: "Guess the number!",
    question:
      "How many moons does Jupiter have? (as of 2021, according to NASA)",
    answer: "Answer: 79",
  },
  {
    prompt: "Guess the planets!",
    question: "Which planets are known as the ice giants?",
    answer: "Answer: Uranus and Neptune",
  },
  {
    prompt: "Guess the planets!",
    question: "Which two planets are known as the gas giants?",
    answer: "Answer: Jupiter and Saturn",
  },
  {
    prompt: "Guess the planets!",
    question:
      "Which planets are known as the terrestrial planets? (rocky planets)",
    answer: "Answer: Mercury, Venus, Earth, and Mars",
  },
  {
    prompt: "Guess the planets!",
    question: "Which planets have rings around them?",
    answer: "Answer: Jupiter, Saturn, Uranus, and Neptune",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Mercury,
    answer: "Answer: Mercury",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Earth,
    answer: "Answer: Earth",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Mars,
    answer: "Answer: Mars",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Jupiter,
    answer: "Answer: Jupiter",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Saturn,
    answer: "Answer: Saturn",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Uranus,
    answer: "Answer: Uranus",
  },
  {
    prompt: "Guess the planet!",
    question: "",
    image: Neptune,
    answer: "Answer: Neptune",
  },
];

function App() {
  const [currentProblem, setCurrentProblem] = useState(problems[0]);
  const [flipCard, setFlipCard] = useState(false);

  const prevClickHandler = () => {
    if (currentProblem === problems[0]) {
      return;
    }
    setCurrentProblem(problems[problems.indexOf(currentProblem) - 1]);
    setFlipCard(false);
  };

  const nextClickHandler = () => {
    if (currentProblem === problems[problems.length - 1]) {
      setCurrentProblem(problems[0]);
    } else {
      setCurrentProblem(problems[problems.indexOf(currentProblem) + 1]);
    }
    setFlipCard(false);
  };

  const handleFlipHandler = () => {
    setFlipCard(!flipCard);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold m-4">
        Solar System{" "}
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-green-400">
          Trivia
        </span>
      </h1>
      <div className="text-3xl">
        <p>Test your solar system knowledge!</p>
        <p>Total number of cards: {problems.length}</p>
      </div>
      <div className="flex">
        {flipCard === false ? (
          <div className="flip-card false">
            {currentProblem.prompt !== undefined ? (
              currentProblem.image !== undefined ? (
                <Flashcard
                  prompt={currentProblem.prompt}
                  text={currentProblem.question}
                  img={currentProblem.image}
                  event={handleFlipHandler}
                />
              ) : (
                <Flashcard
                  prompt={currentProblem.prompt}
                  text={currentProblem.question}
                  event={handleFlipHandler}
                />
              )
            ) : (
              <Flashcard
                text={currentProblem.question}
                event={handleFlipHandler}
              />
            )}
          </div>
        ) : (
          <div className="flip-card true font-bold">
            <Flashcard text={currentProblem.answer} event={handleFlipHandler} />
          </div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <PrevButton event={prevClickHandler} />
        <NextButton event={nextClickHandler} />
      </div>
    </div>
  );
}

export default App;
