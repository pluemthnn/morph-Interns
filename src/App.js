import React, { createContext, useState } from 'react';
import Header from "./components/Header.js";

const TasksContext = React.createContext();
const FunctionContext = React.createContext();

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

  const updateTask = (newTasks, boardId, shouldDelete, id) => {
    const thisTasks = { ...tasks } // the state task
    if (shouldDelete) {
      console.log('inShouldDelete');
      const deleteone = newTasks.filter((task) => task.id !== id);
      thisTasks[boardId] = [...deleteone];
      setTasks(thisTasks);
      console.log(tasks);
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

export { TasksContext };
export { FunctionContext };
export default App;