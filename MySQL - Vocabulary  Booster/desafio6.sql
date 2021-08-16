SELECT
    CONCAT_WS(' ', e.FIRST_NAME, e.LAST_NAME) 'Nome completo',
    j.JOB_TITLE Cargo,
    jh.START_DATE 'Data de início do cargo',
    d.DEPARTMENT_NAME Departamento
FROM
    employees e
        INNER JOIN
        job_history jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
        INNER JOIN
    jobs j ON jh.JOB_ID = j.JOB_ID
        INNER JOIN
    departments d ON jh.DEPARTMENT_ID = d.DEPARTMENT_ID
    ORDER BY `Nome completo` DESC, JOB_TITLE;
