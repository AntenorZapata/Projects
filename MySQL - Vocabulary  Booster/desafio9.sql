
SELECT CONCAT_WS(' ', e.FirstName, e.LastName) 'Nome completo',
COUNT(o.EmployeeID) 'Total de pedidos'
FROM employees e
INNER JOIN orders o
ON e.EmployeeID = o.EmployeeID
GROUP BY o.EmployeeID
ORDER BY COUNT(o.EmployeeID);
