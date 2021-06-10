import React, { useState, useContext } from "react";

export const TasksContext = React.createContext();
export const FunctionContext = React.createContext();

// export function useTasks() {
//   return useContext(TasksContext)
// }

// export function useUpdateTask() {
//   return useContext(FunctionContext)
// }

export function TaskProvider({ children }) {
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
    <FunctionContext.Consumer value={{removeTask, moveTask, updateTask}}>
      <TasksContext.Consumer value={tasks}>
        {children}
      </TasksContext.Consumer>
    </FunctionContext.Consumer>
  )
}

