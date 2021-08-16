DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(code INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE Total_plays INT;
SELECT
    COUNT(user_id)
FROM
    history
WHERE
    user_id = code INTO Total_plays;
    RETURN Total_plays;
END $$

DELIMITER ;
