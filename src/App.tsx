import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import NextButton from "./components/NextButton";
import PrevButton from "./components/PrevButton";

const problems: { prompt?: string; question: string; answer: string }[] = [
  {
    prompt: "What is the output of this code?",
    question: "console.log(1 + '1')",
    answer: "Answer: 11",
  },
  {
    prompt: "What is the output of this code?",
    question:
      "let nums = 5; \nif (nums === 4) \n\tconsole.log(true); \nelse \n\tconsole.log(false);",
    answer: "Answer: false",
  },
  {
    prompt: "What is the output of this code?",
    question:
      "let nums = [1, 2, 3, 4, 5]; \nnums.shift(); \nconsole.log(nums);",
    answer: "Answer: [2, 3, 4, 5]",
  },
  {
    prompt: "What is the output of this code?",
    question:
      "let nums = [2, 4, 6, 8]; \nlet newNums = nums.map(\n\t(num) => (num * 2 + 1)\n); \nconsole.log(newNums);",
    answer: "Answer: [5, 9, 13, 17]",
  },
  {
    prompt: "What is the output of this code?",
    question:
      "const obj = { a: 1, b: 2, c: 3 }; \nconsole.log(Object.keys(obj));",
    answer: "Answer: ['a', 'b', 'c']",
  },
  {
    prompt: "What is the output of this code?",
    question:
      "let nums = [4, 9, 16, 25]; \nlet sum = nums.reduce(\n\t(acc, num) => acc + num\n); \nconsole.log(sum);",
    answer: "Answer: 54",
  },
  {
    prompt: "What is the output of this code?",
    question:
      "let nums = [4, 2, 9, 1, 10]; \nlet filteredNums = nums.filter(\n\t(num) => num > 5\n); \nconsole.log(filteredNums);",
    answer: "Answer: [9, 10]",
  },
  {
    question: "Is JavaScript statically-typed or dynamically-typed?",
    answer: "Answer: Dynamically-typed",
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
        JavaScript{" "}
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Fundamentals
        </span>
      </h1>
      <div className="text-3xl">
        <p>A good way to brush up JavaScript skills!</p>
        <p>Total number of cards: {problems.length}</p>
      </div>
      <div className="flex">
        {flipCard === false ? (
          <div className="flip-card false">
            {currentProblem.prompt !== undefined ? (
              <Flashcard
                prompt={currentProblem.prompt}
                text={currentProblem.question}
                event={handleFlipHandler}
              />
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
