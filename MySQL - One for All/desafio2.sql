CREATE VIEW estatisticas_musicais AS
    SELECT
        COUNT(DISTINCT s.song_id) cancoes,
        COUNT(DISTINCT a.artist_id) artistas,
        COUNT(DISTINCT ab.album_id) albuns
    FROM
        songs s
            INNER JOIN
        album ab ON s.album_id = ab.album_id
            INNER JOIN
        artist a ON ab.artist_id = a.artist_id;
