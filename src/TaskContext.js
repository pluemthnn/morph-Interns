import React, { useState, useContext } from "react";

const TasksContext = React.createContext();
const FunctionContext = React.createContext();

export function useTasks() {
  return useContext(TasksContext)
}

export function useUpdateTask() {
  return useContext(FunctionContext)
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState({
    'todo': [],
    'doing': [],
    'done': [],
    'approve': []
  });

  const removeTask = (newTasks, boardId, id) => {
    const thisTasks = { ...tasks } // the state task
    thisTasks[boardId] = newTasks[boardId].filter((task) => task.id !== id);
    setTasks(thisTasks);
  }
  
  const moveTask = (newTasks, boardId, pos, id) => {
    const thisTasks = { ...tasks } // the state task
    const allBoard = ['todo','doing','done','approve'];
    var nextBoardId
  
    for(let i = 0; i < allBoard.length; i++){
      if(boardId === allBoard[i]){
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
    nextBoardId = allBoard[nextI];

    // delete from current board
    thisTasks[boardId] = newTasks[boardId].filter((task) => task.id !== id);
  
    const moveTask = newTasks[boardId].filter((task) => task.id === id);
    thisTasks[nextBoardId].push(moveTask[0]) // add to des. board
  
    setTasks(thisTasks);
    return;
  }
  
  const updateTask = (newTasks, boardId) => {
    const thisTasks = { ...tasks } // the state task
    thisTasks[boardId].push(newTasks); // push the new task 
    setTasks(thisTasks); // set to state
  }

  return (
    <FunctionContext.Provider value={{removeTask, moveTask, updateTask}}>
      <TasksContext.Provider value={tasks}>
        {children}
      </TasksContext.Provider>
    </FunctionContext.Provider>
  )
}

