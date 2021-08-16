SELECT p.ProductName Produto,
ROUND(AVG(o.Quantity),2) Média,
MIN(o.Quantity) Mínima,
MAX(o.Quantity) Máxima
FROM products p
INNER JOIN order_details o ON p.ProductID = o.ProductID
GROUP BY o.ProductID
HAVING Média > 20.00
ORDER BY AVG(o.Quantity), p.ProductName;
