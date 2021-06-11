export interface HeaderProps {
    className: string,
    name: string,
    boardName: string
}

export interface TextProps {
    id: number
    text: string
    handleDelete:(id: number) => void
    handleMove:(id: number, move: number) => void
    boardName: string
}

export interface BtnProps{
    name: string;
    id: number;
    handleDelete: (id: number) => void;
    handleMove: (id: number, move: number) => void;
}

export interface InputProps {
    boardId: string
}

export interface ITask {
    id: number
    text: string
}
  
export interface IBoardName {
    [key: string]: ITask[]
}