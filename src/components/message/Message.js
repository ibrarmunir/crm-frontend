import React from "react";

const Message = ({ message, date, sender }) => {
  return (
    <div className="message mt-3">
      <div className="message__detail font-weight-bold text-secondary">
        <div className="message__sender">{sender}</div>
        <div className="message__date">{date}</div>
      </div>
      <div className="message__text">{message}</div>
    </div>
  );
};

export default Message;
