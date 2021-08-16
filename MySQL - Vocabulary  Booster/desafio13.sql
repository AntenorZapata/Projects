SELECT
    p.ProductName Produto, p.Price Preço
FROM
    products p
        INNER JOIN
    order_details o ON p.ProductID = o.ProductID
WHERE
    o.Quantity > 80
ORDER BY p.ProductName;
