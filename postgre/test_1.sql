DROP TABLE pref_test;
CREATE TABLE IF NOT EXISTS pref_test (
    id INT,
    reason text COLLATE "C",
    annotation text COLLATE "C"
);
INSERT INTO pref_test (id, reason, annotation)
SELECT s.id,
    md5(random()::text),
    null
FROM generate_series(1, 100000000) AS s(id)
ORDER BY random();
UPDATE pref_test
SET annotation = UPPER(md5(random()::text));
select *
from pref_test
WHERE id = 4019496;
CREATE INDEX idx_pref_test_id ON pref_test(id);
SELECT *
FROM pref_test
WHERE reason LIKE 'bc%'
    AND annotation LIKE 'AB%';
CREATE INDEX idx_pref_test_reason_annotation ON pref_test(reason, annotation);
CREATE EXTENSION pg_trgm;
CREATE INDEX trgm_idx_pref_test_reason ON pref_test USING gin (reason gin_trgm_ops);