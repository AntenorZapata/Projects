DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE Total_Contratados INT;
SELECT
    COUNT(EMPLOYEE_ID)
FROM
    employees
WHERE
    MONTH(HIRE_DATE) = mes AND YEAR(HIRE_DATE) = ano INTO Total_Contratados ;
    RETURN Total_Contratados ;
END $$

DELIMITER ;
