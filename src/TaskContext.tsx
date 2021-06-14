import React, { useState, useContext } from "react";
import { ITask, ITasks, IFunction } from "./@types/interfaces";

const TasksContext = React.createContext<ITasks>({});
const FunctionContext = React.createContext<IFunction>({ removeTask: () => undefined, moveTask: () => undefined, updateTask: () => undefined });

export function useTasks() {
  return useContext(TasksContext)
}

export function useUpdateTask() {
  return useContext(FunctionContext)
}

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITasks>({
    'todo': [],
    'doing': [],
    'done': [],
    'approve': []
  });

  const removeTask = (newTasks: ITasks, boardName: string, id: number) => {
    const thisTasks = { ...tasks } // the state task
    thisTasks[boardName] = newTasks[boardName].filter((task: ITask) => task.id !== id);
    setTasks(thisTasks);
  }
  
  const moveTask = (newTasks: ITasks, boardName: string, pos: number, id: number) => {
    const thisTasks = { ...tasks } // the state task
    const allBoard = ['todo','doing','done','approve'];
    let nextBoardName
    let nextI: number = -1
  
    for(let i = 0; i < allBoard.length; i++){
      if(boardName === allBoard[i]){
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
  
  const updateTask = (newTasks: ITask, boardName: string) => {
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