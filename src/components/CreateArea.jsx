import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.onChange} name="title" placeholder="Title" />
        <textarea onChange={props.onChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={props.onClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
