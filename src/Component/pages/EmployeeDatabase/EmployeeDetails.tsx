import React from "react";
import { EmployeeListModel } from "../../modal";
import styled from "styled-components";

function EmployeeDetails(props: { employee: EmployeeListModel | null }) {
  const { employee } = props;

  return (
    <DetailsContainer className="employee__details">
      <h2 className="employee__details--header">Employee Details</h2>
      {employee && (
        <DetailContent>
          <img
            className="employee__details--image"
            src={employee.imageUrl}
            alt="A A"
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

const DetailsContainer = styled.div`
  width: 70%;
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 10px;
  border: none;
  text-align: center;
  box-shadow: inset 0 0 10px #565f71;

  .employee__details--header {
    text-align: center;
  }
  /* .employee__details--body {
  } */
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
  &::-webkit-scrollbar {
    width: 15px; /* Width of the scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #565f71; //Scrollbar track color */
    border-radius: 10px;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
