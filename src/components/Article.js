import React from "react";

function emojiFromMinutes(minutes) {
    const isLong = minutes >= 30;
    const emoji = isLong ? "🍱" : "☕️";
    const interval = isLong ? 10 : 5;
    return emoji.repeat(Math.ceil(minutes / interval));
  }
  
  function Article({ title, date = "January 1, 1970", preview, minutes }) {
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date} | {emojiFromMinutes(minutes)} {minutes} min read
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;