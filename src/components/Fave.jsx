import React from "react";
import { AddToQueue, RemoveFromQueue } from "@material-ui/icons";

function Fave({ onFaveToggle, isFave }) {
  function handleClick(e) {
    e.stopPropagation();
    onFaveToggle();
    // setIsFave(!isFave);
  }
  return (
    <div
      onClick={handleClick}
      className={`film-row-fave ${
        !isFave ? "add_to_queue" : "remove_from_queue"
      }`}
    >
      <p className="material-icons">
        {!isFave ? <AddToQueue /> : <RemoveFromQueue />}
      </p>
    </div>
  );
}

export default Fave;
