import { useNotification } from "./useNotification";

const App = () => {
    const triggerNotif = useNotification("hi");
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <button onClick={triggerNotif}>hello</button>
      </div>
    );
};
  
  export default App;