CREATE VIEW cancoes_premium AS
    SELECT
        s.song_name nome, COUNT(h.song_id) reproducoes
    FROM
        songs s
            INNER JOIN
        history h ON s.song_id = h.song_id
            INNER JOIN
        user u ON h.user_id = u.user_id
            INNER JOIN
        plan p ON u.plan_id = p.plan_id
    WHERE
        p.plan_type IN ('familiar' , 'universitário')
    GROUP BY s.song_name
    ORDER BY nome;
    