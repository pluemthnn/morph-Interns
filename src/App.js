import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 p-7">
      <DndProvider backend={HTML5Backend}>
        <Header className="rounded-lg	flex bg-yellow-500" name="To Do"/>
        <Header className="rounded-lg	flex bg-green-500" name="Doing"/>
        <Header className="rounded-lg	flex bg-yellow-400" name="Done"/>
        <Header className="rounded-lg	flex bg-blue-500" name="Approve"/>
      </DndProvider>
    </div>
  );
}

export default App;