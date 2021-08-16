DELIMITER $$

-- // Praticamente igual ao desafio 6. Só colocar a solução dentro da PROCEDURE.
CREATE PROCEDURE exibir_historico_completo_por_funcionario (IN email VARCHAR(20))
BEGIN

SELECT
    CONCAT_WS(' ', e.FIRST_NAME, e.LAST_NAME) 'Nome completo',
d.DEPARTMENT_NAME Departamento,
    j.JOB_TITLE Cargo

FROM
    employees e
        INNER JOIN
        job_history jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
        INNER JOIN
    jobs j ON jh.JOB_ID = j.JOB_ID
        INNER JOIN
    departments d ON jh.DEPARTMENT_ID = d.DEPARTMENT_ID
    WHERE e.EMAIL = email
    ORDER BY Departamento, Cargo;
END$$

DELIMITER ;
