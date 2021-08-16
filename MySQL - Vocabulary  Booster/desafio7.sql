SELECT
    UPPER(CONCAT_WS(' ', e.FIRST_NAME, e.LAST_NAME)) 'Nome completo',
    jh.START_DATE 'Data de início',
    e.SALARY Salário
FROM
    employees e
        INNER JOIN
    job_history jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
    WHERE MONTH(jh.START_DATE) IN (1,2,3)
    ORDER BY `Nome Completo`, jh.START_DATE;
