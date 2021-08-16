CREATE VIEW top_3_artistas AS
    SELECT
        a.artist_name artista, COUNT(f.user_id) seguidores
    FROM
        artist a
            INNER JOIN
        follow f ON a.artist_id = f.artist_id
    GROUP BY a.artist_id
    ORDER BY seguidores DESC , a.artist_name
    LIMIT 3;
