import { useCallback, useEffect, useState } from "react";

import "./assets/style.css";
import defaultDataset from "./dataset";
import { AnswersList, Chats, FormDialog } from "./components/entry";

function App() {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const initAnswer = "";
    selectAnswer(initAnswer, currentId);
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  const displayQuestion = (nextQuestionId, nextDataset) => {
    addChats({ text: dataset[nextQuestionId].question, type: "question" });
    setAnswers(nextDataset.answers);
    setCurrentId(nextQuestionId);
  };

  const selectAnswer = useCallback((selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        setTimeout(() => {
          displayQuestion(nextQuestionId, dataset[nextQuestionId]);
        }, 500);
        break;
      case /^https:*/.test(nextQuestionId):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        a.target = "_blank";
        a.click();
        break;
      case nextQuestionId === "contact":
        handleClickOpen();
        break;
      default:
        addChats({ text: selectedAnswer, type: "answer" });
        setTimeout(() => {
          displayQuestion(nextQuestionId, dataset[nextQuestionId]);
        }, 1000);
        break;
    }
  });

  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div>
      <section className="c-section">
        <div className="c-box">
          <Chats chats={chats} />
          <AnswersList answers={answers} select={selectAnswer} />
          <FormDialog open={open} handleClose={handleClose} />
        </div>
      </section>
    </div>
  );
}

export default App;
