-- Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.

DECLARE
    CURSOR cur_senior_customers IS
        SELECT c.CustomerID, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
        WHERE MONTHS_BETWEEN(SYSDATE, c.DOB) / 12 > 60;

BEGIN
    FOR rec IN cur_senior_customers LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;

        DBMS_OUTPUT.PUT_LINE('Applied 1% discount to CustomerID ' || rec.CustomerID || 
                             ', LoanID ' || rec.LoanID || 
                             '. New InterestRate = ' || (rec.InterestRate - 1));
    END LOOP;
    
    COMMIT;
END;
/

SELECT 
    c.CustomerID,
    c.Name,
    TRUNC(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) AS Age,
    l.LoanID,
    l.LoanAmount,
    l.InterestRate,
    l.StartDate,
    l.EndDate
FROM Customers c
JOIN Loans l ON c.CustomerID = l.CustomerID
WHERE TRUNC(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) > 60;