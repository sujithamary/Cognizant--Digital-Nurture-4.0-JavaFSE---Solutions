-- Question: Write a stored procedure TransferFunds that transfers a specified amount from one account to another, checking that the source account has sufficient balance before making the transfer.

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account_id      IN NUMBER,
    p_destination_account_id IN NUMBER,
    p_amount                 IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account_id
    FOR UPDATE;

    
    IF v_source_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient balance in source account.');
        ROLLBACK;
        RETURN;
    END IF;

  
    UPDATE Accounts
    SET Balance = Balance - p_amount,LastModified = SYSDATE
    WHERE AccountID = p_source_account_id;

    
    UPDATE Accounts
    SET Balance = Balance + p_amount,LastModified = SYSDATE
    WHERE AccountID = p_destination_account_id;

    
    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Transfer of $' || p_amount || ' from Account ' || p_source_account_id || ' to Account ' || p_destination_account_id || ' completed.');
END;
/

BEGIN
    TransferFunds(1, 2, 500);
END;
/

SELECT AccountID, CustomerID, AccountType, Balance
FROM Accounts
WHERE AccountID IN (1, 2);