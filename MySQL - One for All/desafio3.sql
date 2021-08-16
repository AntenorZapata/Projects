CREATE VIEW historico_reproducao_usuarios AS
    SELECT
        u.user_name usuario, s.song_name nome
    FROM
        user u
            INNER JOIN
        history h ON u.user_id = h.user_id
            INNER JOIN
        songs s ON h.song_id = s.song_id
    WHERE
        h.song_id = s.song_id
    ORDER BY u.user_name , s.song_name;
