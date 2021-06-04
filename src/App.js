import Header from "./components/Header.js";
import Input from "./components/Input.js";


function App() {
  return (
    <div className="grid grid-cols-4 gap-4 p-7">
      <Header className="border-8 border-opacity-0 rounded-lg	flex bg-yellow-500" name="To Do"></Header>
      <Header className="rounded-lg	flex bg-green-500" name="Doing"></Header>
      <Header className="rounded-lg	flex bg-yellow-400" name="Done"></Header>
      <Header className="rounded-lg	flex bg-blue-500" name="Approve"></Header>
    </div>
  );
}

export default App;
