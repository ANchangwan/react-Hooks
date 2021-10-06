import React, { useState, useEffect } from "react";
import "./styles.css";

const useTitle = initialTitle =>{
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () =>{
        const title = document.querySelector("title");
        title.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

const App = () => {
  const title = useTitle("Loading...");

  setTimeout(()=>{
    titleUpdater("home");
  }, 5000)
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
export default App;
