SELECT
    c.ContactName Nome,
    c.Country País,
    COUNT(c.Country) - 1 'Número de compatriotas'
FROM
    customers c,
    customers c2
WHERE
    c.Country = c2.Country
GROUP BY c.ContactName , c2.Country HAVING count(c.Country) > 1
ORDER BY c.ContactName;
