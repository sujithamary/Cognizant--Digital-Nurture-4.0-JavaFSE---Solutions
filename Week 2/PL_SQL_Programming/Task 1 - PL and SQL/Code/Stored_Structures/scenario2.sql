-- Question: Write a stored procedure UpdateEmployeeBonus that updates the salary of employees in a given department by adding a bonus percentage passed as a parameter.

SET SERVEROUTPUT ON;

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (3, 'Karthik ECE', 'Engineer', 40000, 'ECE', TO_DATE('2019-08-01', 'YYYY-MM-DD'));

COMMIT;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
) IS
    v_count NUMBER := 0;
BEGIN
    
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percent / 100))
    WHERE Department = p_department;

    v_count := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percent || '% applied to ' || v_count || ' employee(s) in department ' || p_department);

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus('ECE', 15);
END;
/

SELECT EmployeeID, Name, Department, Salary
FROM Employees
WHERE Department = 'ECE';