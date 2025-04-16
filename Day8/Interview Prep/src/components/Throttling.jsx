import React, { useState, useRef } from "react";

function ThrottledSearch() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const lastCalled = useRef(0);


  console.log(lastCalled);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    const now = Date.now();

    // Run if 500ms have passed since last call
    if (now - lastCalled.current > 500) {
      setQuery(value);
      lastCalled.current = now;
    }
  };

  return (
    <div>
      <h2>Throttled Search Input</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search here..."
      />
      <p>Query Sent: {query}</p>
    </div>
  );
}

export default ThrottledSearch;
