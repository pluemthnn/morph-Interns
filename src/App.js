import React, { createContext, useState } from 'react';
import Header from "./components/Header.js";

const TasksContext = createContext();
const FunctionContext = createContext();

function App() {

  const [tasks, setTasks] = useState({
    'todo': [],
    'doing': [],
    'done': [],
    'approve': []
  });

  const removeTask = (newTasks, boardId, id) => {
    const thisTasks = { ...tasks } // the state task
    const deleteone = newTasks.filter((task) => task.id !== id);
    thisTasks[boardId].pop(...deleteone)
    setTasks(thisTasks);
    return;
  }

  const moveTask = (newTasks, boardId, pos, id) => {
    const thisTasks = { ...tasks } // the state task
    const allBoard = ['todo','doing','done','approve'];
    var nextBoardId

    for(var i = 0; i < allBoard.length; i++){
      if(boardId === allBoard[i]){
        var nextI 
        if(pos === 1){ //move right
          nextI = i + 1; //index of next board
          break;
        }
        else if (pos === 0) { //move left
          nextI = i - 1; //index of previous board
          break;
        }
      }
    }
    nextBoardId = allBoard[nextI];
  
    const deleteone = newTasks.filter((task) => task.id !== id);
    thisTasks[boardId] = [...deleteone]; // delete from current board

    const moveTask = newTasks.filter((task) => task.id === id);
    thisTasks[nextBoardId].push(...moveTask) // add to des. board

    setTasks(thisTasks);
    return;

  }

  const updateTask = (newTasks, boardId) => {
    const thisTasks = { ...tasks } // the state task
    thisTasks[boardId].push(newTasks); // push the new task 
    setTasks(thisTasks); // set to state
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-7">
      <FunctionContext.Provider value={{ updateTask, removeTask, moveTask }}>
        <TasksContext.Provider value={tasks.todo}>
          <Header className="rounded-lg	flex bg-yellow-500" name="To Do" boardId="todo" />
        </TasksContext.Provider>
        <TasksContext.Provider value={tasks.doing}>
          <Header className="rounded-lg	flex bg-green-500" name="Doing" boardId="doing" />
        </TasksContext.Provider>
        <TasksContext.Provider value={tasks.done}>
          <Header className="rounded-lg	flex bg-yellow-400" name="Done" boardId="done" />
        </TasksContext.Provider>
        <TasksContext.Provider value={tasks.approve}>
          <Header className="rounded-lg	flex bg-blue-500" name="Approve" boardId="approve" />
        </TasksContext.Provider>
      </FunctionContext.Provider>
    </div>
  );
}

export { TasksContext, FunctionContext };
export default App;