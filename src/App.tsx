import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import NextButton from "./components/NextButton";
import PrevButton from "./components/PrevButton";

const problems: { question: string; answer: string }[] = [
  {
    question: "question1",
    answer: "answer1",
  },
  {
    question: "question2",
    answer: "answer2",
  },
  {
    question: "question3",
    answer: "answer3",
  },
  {
    question: "question4",
    answer: "answer4",
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
    <div>
      <h1 className="text-7xl font-bold m-4">Flashcards</h1>
      <p className="text-3xl">A good way to brush up your skills!</p>
      {flipCard === false ? (
        <div className="flip-card false">
          <Flashcard text={currentProblem.question} event={handleFlipHandler} />
        </div>
      ) : (
        <div className="flip-card true">
          <Flashcard text={currentProblem.answer} event={handleFlipHandler} />
        </div>
      )}
      <div className="flex justify-center gap-4">
        <PrevButton event={prevClickHandler} />
        <NextButton event={nextClickHandler} />
      </div>
    </div>
  );
}

export default App;
