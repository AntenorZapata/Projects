-- DATA FORMAT BASED ON: https://stackoverflow.com/a/10637675/14362230
SELECT
    CONCAT_WS(' ', e.FIRST_NAME, e.LAST_NAME) 'Nome completo',
    DATE_FORMAT(jh.START_DATE, '%d/%m/%Y') 'Data de início',
    DATE_FORMAT(jh.END_DATE, '%d/%m/%Y') 'Data de rescisão',
    ROUND(DATEDIFF(jh.END_DATE, jh.START_DATE) / 365,
            2) 'Anos trabalhados'
FROM
    employees e
        INNER JOIN
    job_history jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
ORDER BY `Nome completo` , `Anos trabalhados`;
