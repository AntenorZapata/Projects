CREATE VIEW perfil_artistas AS
    SELECT
        a.artist_name artista,
        ab.album_name album,
        (SELECT
                COUNT(*)
            FROM
                follow
            WHERE
                artist_id = a.artist_id) seguidores
    FROM
        artist a
            INNER JOIN
        album ab ON a.artist_id = ab.artist_id
    ORDER BY seguidores DESC , artista , album;
