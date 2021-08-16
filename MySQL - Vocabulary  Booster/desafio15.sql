DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo (IN jobTitle VARCHAR(20))
BEGIN

SELECT
    ROUND(AVG(e.SALARY),2) 'Média salarial'
FROM
    employees e
        INNER JOIN
    jobs j ON e.JOB_ID = j.JOB_ID
    WHERE j.JOB_TITLE = jobTitle;
END$$

DELIMITER ;
