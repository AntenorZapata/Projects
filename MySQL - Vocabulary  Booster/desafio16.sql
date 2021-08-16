DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(20))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE Total_Empregos INT;
SELECT
    COUNT(e.EMPLOYEE_ID)
FROM
    job_history j
        INNER JOIN
    employees e ON j.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE
    e.EMAIL = email INTO Total_Empregos;
    RETURN Total_Empregos;
END $$

DELIMITER ;
