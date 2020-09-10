import React, { useState } from "react";

export default function Todo() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button>Add</button>
    </div>
  );
}
