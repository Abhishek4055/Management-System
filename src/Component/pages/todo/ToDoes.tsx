import React, { FormEvent, useState } from "react";
import "../scss/todoes.scss";
import { ToDoeModel } from "../../modal";
import InputField from "../../utils/InputFields";
import Button from "../../utils/Button";
import ToDoesList from "./ToDoesList";

const ToDoes: React.FC = () => {
  const [toDoes, setToDoes] = useState<ToDoeModel[]>([]);
  const [completeToDoes, setCompleteToDoes] = useState<ToDoeModel[]>([]);
  const [inputState, setinputState] = useState<string>("");

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputState) {
      setToDoes([
        {
          id: Date.now(),
          toDo: inputState,
          isDone: false,
        },
        ...toDoes,
      ]);
      setinputState("");
    }
  };
  return (
    <div className="todoes">
      <h3 className="todoes-header">
        Add work Task with Drag and Drop Feature{" "}
      </h3>
      <form onSubmit={(e) => formSubmitHandler(e)} className="todoes-form">
        <InputField
          inputType="text"
          name="toDoes"
          value={inputState}
          placeHolder="Add To-does"
          isDisabled={false}
          onChangeInput={(e) => setinputState(e.target.value)}
          className="inputField"
        />
        <Button
          type="submit" // Default button type
          className="to_do_button"
        >
          Go
        </Button>
      </form>
      {
        <ToDoesList
          toDoes={toDoes}
          setToDoes={setToDoes}
          completeToDoes={completeToDoes}
          setCompleteToDoes={setCompleteToDoes}
        />
      }
    </div>
  );
};

export default ToDoes;
