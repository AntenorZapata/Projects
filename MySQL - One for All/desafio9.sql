DELIMITER $$

CREATE PROCEDURE albuns_do_artista (IN name VARCHAR(20))
BEGIN

SELECT
    a.artist_name artista,
    ab.album_name album
FROM
    artist a
        INNER JOIN
    album ab ON a.artist_id = ab.artist_id
  WHERE a.artist_name = name;
END$$

DELIMITER ;
