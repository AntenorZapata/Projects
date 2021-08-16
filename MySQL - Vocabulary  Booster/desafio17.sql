DELIMITER $$
CREATE TRIGGER upDateOrder
    BEFORE INSERT ON orders
    FOR EACH ROW
BEGIN
    SET NEW.OrderDate = NOW();
END $$

DELIMITER ;