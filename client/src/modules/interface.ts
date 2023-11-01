export interface TodoItemProps {
  id: string;
  placeHolder: string;
  checked: boolean;
}

export interface TodoItemsProps {
  todoItems: TodoItemProps[];
  errMsg: string;
}
