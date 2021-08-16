SELECT
    COUNTRY_NAME País,
    IF(REGION_ID = 1,
        'incluído',
        'não incluído') AS 'Status Inclusão'
FROM
    countries ORDER BY COUNTRY_NAME;
