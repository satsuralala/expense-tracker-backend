
CREATE TABLE IF NOT EXISTS playing_with_neon(id SERIAL PRIMARY KEY, name TEXT NOT NULL, value REAL);

CREATE TABLE category(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
)
ALTER TABLE category
    ADD COLUMN color varchar(16);
    ADD COLUMN icon varchar(16);

select id, name FROM categories;
select * FROM categories;


INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;