import React, { createContext, useState } from 'react';
import Header from "./components/Header.js";

const TasksContext = createContext();
const FunctionContext = createContext();

function App() {
  // const taskData = {
  //   'todo': [{id: 23, text: 'call mom'}, {id: 42, text: 'call dad'}],
  //   'doing': [],
  //   'done':[{id: 33, text: 'work'}],
  //   'approve': []
  // }
  const [tasks, setTasks] = useState({
    'todo': [
      {
        'id': 23, 'text': 'call mom'
      },
      {
        'id': 42, 'text': 'call dad'
      }
    ],
    'doing': [],
    'done': [
      {
        'id': 33, 'text': 'work'
      }
    ],
    'approve': []
  });

  const updateTask = (newTasks, boardId, shouldDelete, moveNext, id) => {
    const thisTasks = { ...tasks } // the state task
    if (shouldDelete) {
      console.log('inShouldDelete');
      const deleteone = newTasks.filter((task) => task.id !== id);
      thisTasks[boardId].pop(...deleteone)
      setTasks(thisTasks);
      console.log(tasks);
      return;
    }
    if(moveNext) {
      var nextBoardId
      switch(boardId) {
        case 'todo': nextBoardId = "doing"; break;
        case 'doing': nextBoardId = "done"; break;
        case 'done': nextBoardId = "approve"; break;
        case 'approve': nextBoardId = "todo"; break;
        default:
          break;
      } 
      const deleteone = newTasks.filter((task) => task.id !== id);
      thisTasks[boardId].pop(...deleteone)
      
      const moveTask = newTasks.filter((task) => task.id === id);
      thisTasks[nextBoardId].push(...moveTask)

      setTasks(thisTasks);
      console.log(tasks, "move to " + nextBoardId);
      return;
    }

    thisTasks[boardId].push(newTasks);
    setTasks(thisTasks);
    console.log(tasks);
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-7">
      <FunctionContext.Provider value={updateTask}>
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