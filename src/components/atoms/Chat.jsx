import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import bird from "../../assets/img/カモメ.jpg";

export const Chat = ({ text, type }) => {
  const isQuestion = type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={bird} />
        ) : (
          <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{text}</div>
    </ListItem>
  );
};
