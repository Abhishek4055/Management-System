import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import EmployeeList from "./EmployeeList";
import { EmployeeListModel } from "../../modal";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeIForm from "./EmployeeIForm";

const EmployeeDetabaseIndex = () => {
  const [employeeList, setEmployeeList] = useState<EmployeeListModel[]>([]);
  const [employee, setEmployee] = useState<EmployeeListModel | null>(null);
  const [activeEmployee, setActiveEmployee] = useState<number>(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const openOverlay = () => setIsOverlayVisible(true);
  const closeOverlay = () => setIsOverlayVisible(false);

  const getEmployeeList = async () => {
    try {
      const response = await fetch("../../../.././data.json");
      const data = await response.json();
      setEmployeeList(data);
    } catch (e) {
      console.log(e);
    }
  };

  const employeeItemHandler = useCallback(
    (e: any) => {
      const { id } = e.target;
      const [userId, type] = id.split("_");
      if (userId && type === "user") {
        const selectedEmployee = employeeList.find(
          (emp) => emp.id === parseInt(userId, 10)
        );

        if (selectedEmployee) {
          setEmployee(selectedEmployee);

          setActiveEmployee(selectedEmployee.id);
        }
      } else if (userId && type === "delete") {
        const filteredList = employeeList.filter(
          (el) => el.id !== parseInt(userId, 10)
        );

        if (filteredList) {
          setEmployeeList(filteredList);
        }
      }
    },
    [employeeList]
  );

  useEffect(() => {
    getEmployeeList();
  }, []);

  useEffect(() => {
    setEmployee(employeeList[0]);
    setActiveEmployee(employeeList[0]?.id);
  }, [employeeList]);

  const addInputData = useCallback(
    (formData: EmployeeListModel) => {
      setEmployeeList([formData, ...employeeList]);
      if (formData) return true;
    },
    [employeeList]
  );

  return (
    <>
      <Header>
        <h2> Employee Database Management </h2>
        <StypledButton onClick={openOverlay}> Add New Employee </StypledButton>
      </Header>

      <EmployeeIForm
        isOverlayVisible={isOverlayVisible}
        closeOverlay={closeOverlay}
        addInputData={addInputData}
      />

      <Container>
        <EmployeeList
          activeEmployee={activeEmployee}
          employeeList={employeeList}
          employeeItemHandler={employeeItemHandler}
        />
        <EmployeeDetails employee={employee} />
      </Container>
    </>
  );
};

export default EmployeeDetabaseIndex;

const Header = styled.header`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  @media (max-width: 480px) {
    font-size: xx-small;
    margin: 0 20px;
    text-align: left;
  }
`;

const StypledButton = styled.button`
  font-size: 15px;
  background: #f0f8ff;
  border-radius: 10px;
  padding: 10px;
  color: #142a54;
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
  @media (max-width: 480px) {
    font-size: x-small;
    padding: 5px;
    border-radius: 5px;
  }
`;

const Container = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
