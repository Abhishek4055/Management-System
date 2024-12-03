import React from "react";
import { EmployeeListModel } from "../../modal";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

function EmployeeList(props: {
  activeEmployee: number;
  employeeList: EmployeeListModel[];
  employeeItemHandler: any;
}) {
  const { employeeList, employeeItemHandler, activeEmployee } = props;
  return (
    <ListContainer>
      <h2 className="employee__list--header">Employee List</h2>
      <List onClick={employeeItemHandler} id="id">
        {employeeList?.map((item) => (
          <div
            className={`employee__list_item ${
              activeEmployee === item.id ? "active" : ""
            }`}
            key={item.id}
            id={item.id.toString()}
          >
            <span
              className="employee__list--item--text "
              id={item.id.toString()}
            >
              {item.fName + " " + item.lName}
            </span>
            <IconButton
              className="employee__list--item--icon "
              id={item.id.toString()}
            >
              <AiFillDelete />
            </IconButton>
          </div>
        ))}
      </List>
    </ListContainer>
  );
}

export default React.memo(EmployeeList);

const ListContainer = styled.div`
  width: 40%;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  text-align: center;
  box-shadow: inset 0 0 10px #565f71;
  /* position: relative; */

  .employee__list--header {
    text-align: center;
  }
`;
const List = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px; /* Scrollbar width */
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
  }
`;
