import React from "react";
import { Answer } from "../entry";

export const AnswersList = ({ answers, select }) => {
  return (
    <div className="c-grid__answer">
      {answers.map((answer, index) => {
        return (
          <Answer
            key={index.toString()}
            nextId={answer.nextId}
            content={answer.content}
            select={select}
          />
        );
      })}
    </div>
  );
};
