import React from "react";
import { EmployeeListModel } from "../../modal";
import styled from "styled-components";
import LoadingPage from "../../utils/LoadingPage";
// import { AiFillDelete } from "react-icons/ai";

function EmployeeList(props: {
  activeEmployee: number | undefined;
  employeeList: EmployeeListModel[];
  employeeItemHandler: any;
  isLoading?: boolean;
}) {
  const { employeeList, employeeItemHandler, activeEmployee, isLoading } =
    props;
  return (
    <ListContainer employeeList={employeeList}>
      <ListHeader>
        <h2 className="employee__list--header">Employee List</h2>
      </ListHeader>

      {isLoading ? (
        <LoadingPage />
      ) : (
        <List onClick={employeeItemHandler} id="id" employeeList={employeeList}>
          {employeeList?.map((item) => (
            <div
              className={`employee__list_item ${
                activeEmployee === item.id ? "active" : ""
              }`}
              key={item.id}
              id={`${item.id?.toString()}_addUser`}
            >
              <span
                className="employee__list--item--text "
                id={`${item.id?.toString()}_addUser`}
              >
                {item.fName + " " + item.lName}
              </span>
              <IconButton
                className="employee__list--item--icon"
                id={`${item.id?.toString()}_delete`}
              >
                ❌
                {/* <AiFillDelete id={item.id.toString() + "_" + "delete"} /> */}
              </IconButton>
            </div>
          ))}
        </List>
      )}
    </ListContainer>
  );
}

export default React.memo(EmployeeList);

interface ListStyledContainer {
  employeeList: EmployeeListModel[] | [];
}
const ListContainer = styled.div<ListStyledContainer>`
  width: 40%;
  min-height: ${({ employeeList }) => (employeeList.length ? "90vh" : "auto")};
  max-height: ${({ employeeList }) => (employeeList.length ? "90vh" : "auto")};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  text-align: center;
  box-shadow: inset 0 0 10px #565f71;

  @media (max-width: 480px) {
    width: 100%;
    min-height: auto;
    max-height: max-content;
    flex-wrap: wrap;
  }

  .employee__list--header {
    text-align: center;
  }
`;

const ListHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */

  @media (max-width: 480px) {
    /* justify-content: flex-start; */
  }
`;
const List = styled.div<ListStyledContainer>`
  width: 100%;
  min-height: ${({ employeeList }) => (employeeList.length ? "73vh" : "auto")};
  max-height: ${({ employeeList }) => (employeeList.length ? "73vh" : "auto")};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px; /* Scrollbar width */
  }
  &::-webkit-scrollbar-track {
    background: #565f71; /* Track background */
    border-radius: 10px;
    margin-left: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #31353c; /* Scrollbar thumb color */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 10px #565f71; /* Thumb color on hover */
  }

  @media (max-width: 480px) {
    min-height: auto;
    max-height: ${({ employeeList }) =>
      employeeList.length ? "40vh" : "auto"};
    margin-bottom: 5px;
    &::-webkit-scrollbar {
      width: 5px; /* Scrollbar width */
    }
  }

  .employee__list_item {
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    box-shadow: inset 0 0 10px #565f71;
    border-radius: 10px;
    color: "#f0f8ff";
    transition: 0.4s all;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    &.active {
      color: #00ffbb;
      box-shadow: inset 0 0 10px #4ed697;
      .employee__list--item--icon {
        color: #f0f8ff;
      }
    }
  }
`;

const IconButton = styled.span`
  padding: 5px;
  color: "#f0f8ff" !important;
  border: none;
  background: none;
  transition: 0.2s all;
  &:hover {
    transform: scale(1.5);
    color: #ff0000 !important;
    cursor: pointer;
  }
`;
