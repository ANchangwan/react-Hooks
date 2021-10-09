import {useFullScreen} from "useFullscreen";
const App = () => {
    const { element, triggerFull } = useFullScreen();
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>  
            <img
            ref={element}
            src="https://i.ibb.co/R6RwNxx/grape.jpg"
            alt="grape"
            width="250"
            />
            <button onClick={triggerFull}>FullScreen</button>
        </div>
        <button onClick={exitFull}>exitFull</button>
      </div>
    );
  };

export default App;