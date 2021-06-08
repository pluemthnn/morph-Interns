import React, { createContext, useState } from 'react';
import Header from "./components/Header.js";

const TasksContext = React.createContext();
const FunctionContext = React.createContext();

function App() {

  const taskData = {
    'todo': [{id: 23, text: 'call mom'}, {id: 42, text: 'call dad'}],
    'doing': [],
    'done':[{id: 33, text: 'work'}],
    'approve': []
  }
  const [tasks, setTasks] = useState(taskData);

  const updateTask = (tasks, boardId, shouldDelete, id) => {
    let newTasks = [...tasks];
    // switch (Object.values(boardId)[0]) {
    //   case '0':
    //     console.log(taskData.todo);
    //     break;
    //   case '1':
    //     console.log(taskData.doing);
    //     break;
    //   case '2':
    //     console.log(taskData.done);
    //     break;
    //   case '3':
    //     console.log(taskData.approve);
    //     break;
    // }
    if (shouldDelete){
      console.log('inShouldDelete');
      console.log(tasks.filter((task) => task.id !== id)); 
      newTasks = tasks.filter((task) => task.id !== id);
      setTasks(newTasks); // update all tasks (!not update)
      return;
    }
    setTasks(newTasks)
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-7">
      <FunctionContext.Provider value={updateTask}>
        <TasksContext.Provider value={tasks.todo}>
          <Header className="rounded-lg	flex bg-yellow-500" name="To Do" boardId="0"/>
        </TasksContext.Provider>
        <TasksContext.Provider value={tasks.doing}>
          <Header className="rounded-lg	flex bg-green-500" name="Doing" boardId="1"/>
        </TasksContext.Provider>
        <TasksContext.Provider value={tasks.done}>
          <Header className="rounded-lg	flex bg-yellow-400" name="Done" boardId="2"/>
        </TasksContext.Provider>
        <TasksContext.Provider value={tasks.approve}>
          <Header className="rounded-lg	flex bg-blue-500" name="Approve"boardId="3"/>
        </TasksContext.Provider>
      </FunctionContext.Provider>
    </div>
  );
}

export { TasksContext };
export { FunctionContext };
export default App;