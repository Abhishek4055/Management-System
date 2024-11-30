import React, { FormEvent, useState } from "react";
import OverlayPage from "../../utils/OverLay";
import InputField from "../../utils/InputFields";
import { EmployeeListModel } from "../../modal";
import styled from "styled-components";

export default function EmployeeIForm({
  isOverlayVisible,
  closeOverlay,
  addInputData,
}: {
  isOverlayVisible: boolean;
  closeOverlay: () => void;
  addInputData: (formData: EmployeeListModel) => boolean | undefined;
}) {
  const [inputState, setinputState] = useState<EmployeeListModel>({
    id: new Date().getTime(),
    imageUrl: "",
    fName: "",
    lName: "",
    age: "",
    email: "",
    dob: "",
    salary: 0,
    address: "",
  });

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let dob = e.target.value;

    // Remove any non-digit characters and format to DD-MM-YYYY
    dob = dob.replace(/\D/g, "");

    if (dob.length >= 6) {
      dob = `${dob.slice(0, 2)}-${dob.slice(2, 4)}-${dob.slice(4, 8)}`;
    }

    setinputState({
      ...inputState,
      dob: dob, // Store formatted date
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const isSubmited = addInputData({
      ...inputState,
      imageUrl:
        inputState.imageUrl === ""
          ? "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
          : inputState.imageUrl,
    });

    if (isSubmited) {
      closeOverlay();
      setinputState({
        id: new Date().getTime(),
        imageUrl: "",
        fName: "",
        lName: "",
        age: "",
        email: "",
        dob: "",
        salary: 0,
        address: "",
      });
    }
  };

  const resetHandeler = () => {
    setinputState({
      id: new Date().getTime(),
      imageUrl: "",
      fName: "",
      lName: "",
      age: "",
      email: "",
      dob: "",
      salary: 0,
      address: "",
    });
  };

  return (
    <OverlayPage
      isVisible={isOverlayVisible}
      onClose={closeOverlay}
      titel="Add Employee Details"
      isDisabled={false}
    >
      <FormContainer onSubmit={submitHandler}>
        <span>
          <label htmlFor="fName">First Name</label>
          <InputField
            inputType="text"
            name="fName"
            value={inputState.fName}
            placeHolder="Enter First Name"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, fName: e.target.value })
            }
            className="inputField"
            required
          />
        </span>
        <span>
          <label htmlFor="lName">Last Name</label>
          <InputField
            inputType="text"
            name="lName"
            value={inputState.lName}
            placeHolder="Enter Last Name"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, lName: e.target.value })
            }
            className="inputField"
            required
          />
        </span>
        <span>
          <label htmlFor="imageUrl">Image URL</label>
          <InputField
            inputType="text"
            name="imageUrl"
            value={inputState.imageUrl}
            placeHolder="Add Image URL"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, imageUrl: e.target.value })
            }
            className="inputField"
          />
        </span>
        <span>
          <label htmlFor="age">Enter Age</label>
          <InputField
            inputType="text"
            name="age"
            value={inputState.age}
            placeHolder="Enter Age"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, age: e.target.value })
            }
            className="inputField"
            required
          />
        </span>
        <span>
          <label htmlFor="email">Email</label>
          <InputField
            inputType="email"
            name="email"
            value={inputState.email}
            placeHolder="Enter Email"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, email: e.target.value })
            }
            className="inputField"
            required
          />
        </span>
        <span>
          <label htmlFor="dob">Date of Birth (DD-MM-YYYY)</label>
          <InputField
            inputType="text"
            name="dob"
            value={inputState.dob}
            placeHolder="DD-MM-YYYY"
            isDisabled={false}
            pattern="\d{2}-\d{2}-\d{4}" // Validates the format on submit
            onChangeInput={handleDobChange}
            className="inputField"
          />
        </span>
        <span>
          <label htmlFor="salary">Salary</label>
          <InputField
            inputType="number"
            name="salary"
            value={inputState.salary}
            placeHolder="Enter Salary"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, salary: Number(e.target.value) })
            }
            className="inputField"
            required
          />
        </span>
        <span>
          <label htmlFor="address">Address</label>
          <InputField
            inputType="text"
            name="address"
            value={inputState.address}
            placeHolder="Enter Address"
            isDisabled={false}
            onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setinputState({ ...inputState, address: e.target.value })
            }
            className="inputField"
            required
          />
        </span>
        <OverLayFooter>
          <Button buttonType="reset" type="reset" onClick={resetHandeler}>
            Reset
          </Button>
          <Button buttonType="submit" type="submit">
            Submit
          </Button>
        </OverLayFooter>
      </FormContainer>
    </OverlayPage>
  );
}

const FormContainer = styled.form`
  box-sizing: border-box;
  height: 65vh;
  padding: 0 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    box-shadow: inset 0 0 10px #565f71;
    border-radius: 10px;
    margin: 10px;
    label {
      padding: 5px 15px 0 15px;
      font-size: smaller;
      width: 90%;
      color: #67dfb7;
      text-align: left;
    }
    .inputField {
      width: 90%;
      height: 100%;
      background: none;
      border: none;
      margin: 0 5px;
      color: #f0f8ff;
      padding: 10px 10px;
      font-size: 15px;
      &:focus {
        outline: none;
      }
    }
  }
`;

const OverLayFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

interface ButtonProps {
  buttonType: "submit" | "reset";
}

const Button = styled.button<ButtonProps>`
  font-size: 15px;
  margin: 7px;
  background: ${({ buttonType }) =>
    buttonType === "submit" ? "#67dfb7" : "#f0f8ff"};
  border-radius: 7px;
  padding: 10px 20px;
  color: #142a54;
  font-weight: bold;
  border: none;
  text-align: center;
  box-shadow: inset 0 0 10px #565f71;
  transition: 0.2s all;

  &:hover {
    color: #f0f8ff;
    cursor: pointer;
    background: #3ea1bb;
    box-shadow: inset 0 0 10px #ffffff;
    transform: scale(1.1);
  }

  &:active {
    box-shadow: inset 0 0 5px #3ea1bb;
    color: #f0f8ff;
  }
`;
