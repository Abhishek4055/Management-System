import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import EmployeeList from "./EmployeeList";
import { EmployeeListModel } from "../../modal";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeIForm from "./EmployeeIForm";

const EmployeeDetabaseIndex = () => {
  const [employeeList, setEmployeeList] = useState<EmployeeListModel[]>([]);
  const [employee, setEmployee] = useState<EmployeeListModel | null>(null);
  const [activeEmployee, setActiveEmployee] = useState<number | undefined>(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedEditedData, setSelectedEditedData] =
    useState<EmployeeListModel | null>(null);

  const openOverlay = () => {
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setIsEdit(false);
  };

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
      if (userId && type === "addUser") {
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
        setEmployeeList(filteredList);
      }
    },
    [employeeList]
  );

  useEffect(() => {
    getEmployeeList();
  }, []);

  useEffect(() => {
    let setOfId = new Set();
    for (let el of employeeList) {
      setOfId.add(el.id);
    }

    if (employee && setOfId.has(employee.id)) {
      // is selected employee available in the list or not
      if (employee.id === employeeList[0]?.id) {
        setEmployee(employeeList[0]);
        setActiveEmployee(employeeList[0]?.id);
      } else {
        setEmployee(employee);
        setActiveEmployee(employee.id);
      }
    } else {
      setEmployee(employeeList[0]);
      setActiveEmployee(employeeList[0]?.id);
    }
  }, [employeeList, setActiveEmployee]);

  // update edit form input
  const detailsEditHandler = useCallback(
    (item: EmployeeListModel | null) => {
      if (item) {
        setSelectedEditedData({ ...item });
        setIsOverlayVisible(!isOverlayVisible);
        setIsEdit(true);
      }
    },
    [isOverlayVisible]
  );

  // submit add/edit form input data
  const submitInputData = useCallback(
    (formData: EmployeeListModel) => {
      if (isEdit && formData) {
        const updateItem = employeeList.map((element) =>
          element?.id === formData.id ? formData : element
        );
        setEmployee(formData);
        setActiveEmployee(formData.id);
        setEmployeeList(updateItem);
        setIsEdit(false);
      } else {
        setEmployeeList([formData, ...employeeList]);
        setEmployee(null);
      }
      if (formData) return true;
    },
    [isEdit, setEmployee, setActiveEmployee]
  );

  console.log("isEdit", isEdit, employeeList);
  return (
    <>
      <Header>
        <h2> Employee Database Management </h2>
        <StypledButton onClick={openOverlay}> Add New Employee </StypledButton>
      </Header>

      <Container>
        <EmployeeList
          // employee={employee}
          activeEmployee={activeEmployee}
          employeeList={employeeList}
          employeeItemHandler={employeeItemHandler}
        />
        <EmployeeDetails
          employee={employee}
          detailsEditHandler={detailsEditHandler}
        />
      </Container>

      <EmployeeIForm
        isOverlayVisible={isOverlayVisible}
        closeOverlay={closeOverlay}
        submitInputData={submitInputData}
        selectedEditedData={selectedEditedData}
        isEdit={isEdit}
      />
    </>
  );
};

export default EmployeeDetabaseIndex;

const Header = styled.header`
  margin: 0 50px;
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
  padding: 0px 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 25px;
  box-sizing: border-box;
  height: 90vh;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
