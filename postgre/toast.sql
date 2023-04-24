CREATE TABLE t(id integer PRIMARY KEY, s text);
INSERT INTO t(id, s)
SELECT 0,
    string_agg(id::text, '.')
FROM generate_series(1, 10000) AS id;
SELECT pg_size_pretty(pg_total_relation_size('t'));
SELECT pg_size_pretty(pg_relation_size('t', 'main'));
SELECT reltoastrelid::regclass::text
FROM pg_class
WHERE relname = 't';