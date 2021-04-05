import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Chat } from "../entry";

const useStyles = makeStyles({
  chats: {
    height: 400,
    padding: 0,
    overflow: "auto",
  },
});

export const Chats = ({ chats }) => {
  const classes = useStyles();

  return (
    <List className={classes.chats} id="scroll-area">
      {chats.map((chat, index) => {
        return <Chat key={index.toString()} text={chat.text} type={chat.type} />;
      })}
    </List>
  );
};
