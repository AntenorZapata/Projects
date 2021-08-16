CREATE VIEW top_2_hits_do_momento AS
    SELECT
        s.song_name cancao, COUNT(h.user_id) reproducoes
    FROM
        songs s
            INNER JOIN
        history h ON s.song_id = h.song_id
    GROUP BY s.song_id
    ORDER BY reproducoes DESC , cancao
    LIMIT 2;
