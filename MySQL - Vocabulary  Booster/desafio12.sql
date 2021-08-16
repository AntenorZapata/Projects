SELECT
    CONCAT_WS(' ', e.FIRST_NAME, e.LAST_NAME) 'Nome completo funcionário 1',
    e.SALARY 'Salário funcionário 1',
    e.PHONE_NUMBER 'Telefone funcionário 1',
    CONCAT_WS(' ', e2.FIRST_NAME, e2.LAST_NAME) 'Nome completo funcionário 2',
    e2.SALARY 'Salário funcionário 2',
    e2.PHONE_NUMBER 'Telefone funcionário 2'
FROM
    employees e
        INNER JOIN
    employees e2 ON e.JOB_ID = e2.JOB_ID
GROUP BY e.EMPLOYEE_ID , e2.EMPLOYEE_ID
HAVING `Nome completo funcionário 1` <> `Nome completo funcionário 2`
ORDER BY `Nome completo funcionário 1`, `Nome completo funcionário 2`;
