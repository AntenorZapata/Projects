SELECT
    c.ContactName 'Nome de contato',
    s.ShipperName 'Empresa que fez o envio',
    o.OrderDate 'Data do pedido'
FROM
    customers c
        INNER JOIN
    orders o ON c.CustomerID = o.CustomerID
        INNER JOIN
    shippers s ON o.ShipperID = s.ShipperID

    WHERE s.ShipperName IN ('Speedy Express', 'United Package')
ORDER BY c.ContactName , s.ShipperName , o.OrderDate;
