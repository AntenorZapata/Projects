SELECT
    JOB_TITLE AS 'Cargo',
    MAX_SALARY - MIN_SALARY 'Variação Salarial',
    ROUND((MIN_SALARY / 12),2) 'Média mínima mensal',
    ROUND((MAX_SALARY / 12),2) 'Média máxima mensal'
FROM
    jobs
ORDER BY MAX_SALARY - MIN_SALARY, JOB_TITLE;

-- SELECT
--     JOB_TITLE Cargo,
--     (MAX_SALARY - MIN_SALARY) 'Variação Salarial',
--     ROUND(ROUND(((MAX_SALARY + MIN_SALARY) / 2) / 12, 2) * MIN_SALARY / ROUND((MAX_SALARY + MIN_SALARY) / 2, 2),
--             2) 'Média mínima mensal',
--     ROUND(ROUND(((MAX_SALARY + MIN_SALARY) / 2) / 12, 2) * MAX_SALARY / ROUND((MAX_SALARY + MIN_SALARY) / 2, 2),
--             2) "Média máxima mensal"
-- FROM
--     jobs ORDER BY `Variação Salarial`, JOB_TITLE;
