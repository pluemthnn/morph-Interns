import React from "react";
import { TaskProvider } from "./TaskContext"
import Header from "./components/Header";

function App() {
  return (
      <div className="grid grid-cols-4 gap-4 p-7">  
        <TaskProvider>
          <Header className="rounded-lg	flex bg-yellow-500" name="To Do" boardName="todo" />     
          <Header className="rounded-lg	flex bg-green-500" name="Doing" boardName="doing" />  
          <Header className="rounded-lg	flex bg-yellow-400" name="Done" boardName="done" />
          <Header className="rounded-lg	flex bg-blue-500" name="Approve" boardName="approve" />
        </TaskProvider>  
      </div>  
  );
}

export default App;