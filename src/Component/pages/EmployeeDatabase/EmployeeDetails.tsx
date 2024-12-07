import React from "react";
import { EmployeeListModel } from "../../modal";
import styled from "styled-components";

function EmployeeDetails(props: {
  employee: EmployeeListModel | null;
  detailsEditHandler: (employee: EmployeeListModel | null) => void;
}) {
  const { employee, detailsEditHandler } = props;

  return (
    <DetailsContainer className="employee__details" employee={employee}>
      <DetailsHeader>
        <h2 className="employee__details--header">Employee Details</h2>
        {employee?.id && (
          <EditIcon onClick={() => detailsEditHandler(employee)}>📝</EditIcon>
        )}
      </DetailsHeader>
      {employee?.id && (
        <DetailContent>
          <img
            className="employee__details--image"
            src={employee.imageUrl}
            alt={`${employee.fName?.charAt(0).toUpperCase()} ${employee.lName
              ?.charAt(0)
              .toUpperCase()}`}
          />
          <span className="employee__details--comp">
            {employee.fName} {employee.lName} ({employee.age})
          </span>
          <span className="employee__details--comp">
            D.O.B : {employee.dob}
          </span>
          <span className="employee__details--comp">
            Email Id : {employee.email}
          </span>
          <span className="employee__details--comp">
            Salary : {employee.salary}k
          </span>
          <span className="employee__details--comp">
            Address: {employee.address}
          </span>
        </DetailContent>
      )}
    </DetailsContainer>
  );
}

export default React.memo(EmployeeDetails);

interface DetailsStyledContainer {
  employee: EmployeeListModel | null;
}
const DetailsContainer = styled.div<DetailsStyledContainer>`
  width: 70%;
  min-height: ${({ employee }) => (employee?.id ? "90vh" : "auto")};
  max-height: ${({ employee }) => (employee?.id ? "90vh" : "auto")};
  /* overflow-y: auto; */
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 20px;
  border: none;
  text-align: center;
  box-shadow: inset 0 0 10px #565f71;

  @media (max-width: 480px) {
    width: 100%;
    min-height: auto;
    max-height: max-content;
    padding: 0 15px;
  }

  .employee__details--header {
    text-align: center;
    @media (max-width: 480px) {
      justify-content: flex-start;
    }
  }
`;
const DetailsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;
const EditIcon = styled.span`
  padding: 5px;
  font-size: larger;
  position: absolute;
  right: 4%;
  top: 18px;
  transition: 0.4s all;

  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }

  @media (max-width: 480px) {
    right: 0;
    padding: 0;
    top: auto;
  }
`;

const DetailContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    width: auto;
    min-height: auto;
    max-height: max-content;
  }
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: #565f71;
    border-radius: 10px;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
