import React, { useState, useContext } from "react";

const TasksContext = React.createContext({});
const FunctionContext = React.createContext({});

export function useTasks() {
  return useContext(TasksContext)
}

export function useUpdateTask() {
  return useContext(FunctionContext)
}

interface ITask {
  id: number
  text: string 
}

interface IBoardName {
  [key: string]: ITask
}

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState({
    'todo': [],
    'doing': [],
    'done': [],
    'approve': []
  });

  const removeTask = (newTasks: Array<ITask>, boardName: IBoardName, id: number) => {
    const thisTasks = { ...tasks } // the state task
    thisTasks[boardName] = newTasks[boardName].filter((task: ITask) => task.id !== id);
    setTasks(thisTasks);
  }
  
  const moveTask = (newTasks: Array<ITask>, boardName: IBoardName, pos: number, id: number) => {
    const thisTasks = { ...tasks } // the state task
    const allBoard = ['todo','doing','done','approve'];
    var nextBoardName
  
    for(let i = 0; i < allBoard.length; i++){
      if(boardName === allBoard[i]){
        var nextI 
        if(pos === 1){ //move right
          nextI = i + 1; //index of next board
          break;
        }
        //move left
        nextI = i - 1; //index of previous board
        break;
      }
    }
    nextBoardName = allBoard[nextI];

    // delete from current board
    thisTasks[boardName] = newTasks[boardName].filter((task: ITask) => task.id !== id);
  
    const moveTask = newTasks[boardName].filter((task: ITask) => task.id === id);
    thisTasks[nextBoardName].push(moveTask[0]) // add to des. board
  
    setTasks(thisTasks);
    return;
  }
  
  const updateTask = (newTasks: Array<ITask>, boardName: IBoardName) => {
    const thisTasks = { ...tasks } // the state task
    thisTasks[boardName].push(newTasks); // push the new task 
    setTasks(thisTasks); // set to state
  }

  return (
    <FunctionContext.Provider value={{ removeTask, moveTask, updateTask }}>
      <TasksContext.Provider value={ tasks }>
        {children}
      </TasksContext.Provider>
    </FunctionContext.Provider>
  )
}