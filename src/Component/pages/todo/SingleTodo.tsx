import React, { useEffect, useRef, useState } from "react";
import "../scss/singleToDo.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import { ToDoeModel } from "../../modal";
import InputField from "../../utils/InputFields";
type Props = {
  index: number;
  todo: ToDoeModel;
  toDoes: ToDoeModel[];
  setToDoes: React.Dispatch<React.SetStateAction<ToDoeModel[]>>;
};

const SingleTodo = ({ index, todo, toDoes, setToDoes }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>(todo.toDo);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitEdited = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDoes(
      toDoes.map((ele) => (ele.id === id ? { ...ele, toDo: edit } : ele))
    );
    setIsEdit(false);
  };

  const deleteHandler = (id: number) => {
    setToDoes(toDoes.filter((el) => el.id !== id));
  };
  const doneHandler = (id: number) => {
    setToDoes(
      toDoes.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);
  console.log(todo.id.toString(), index);
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="single-to-do"
          onSubmit={(e) => onSubmitEdited(e, todo.id)}
        >
          {isEdit ? (
            <InputField
              inputType="text"
              name="editToDoes"
              value={edit}
              isDisabled={false}
              onChangeInput={(e) => setEdit(e.target.value)}
              className="inputField"
            />
          ) : todo.isDone ? (
            <s className="single-to-do-text">{todo.toDo}</s>
          ) : (
            <span className="single-to-do-text">{todo.toDo}</span>
          )}
          <div className="single-to-do-icon">
            <span
              onClick={() => {
                if (!isEdit && !todo.isDone) {
                  setIsEdit(!isEdit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span onClick={() => deleteHandler(todo.id)}>
              <AiFillDelete />
            </span>
            <span onClick={() => doneHandler(todo.id)}>
              <MdOutlineDownloadDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
