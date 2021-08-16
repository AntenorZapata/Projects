CREATE VIEW faturamento_atual AS
    SELECT
        ROUND(MIN(p.plan_value), 2) faturamento_minimo,
        ROUND(MAX(p.plan_value), 2) faturamento_maximo,
        ROUND(AVG(p.plan_value), 2) faturamento_medio,
        ROUND(SUM(p.plan_value), 2) faturamento_total
    FROM
        plan p
            INNER JOIN
        user u ON p.plan_id = u.plan_id;

