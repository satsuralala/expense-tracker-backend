
CREATE TABLE IF NOT EXISTS playing_with_neon(id SERIAL PRIMARY KEY, name TEXT NOT NULL, value REAL);

CREATE TABLE category(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL
)
ALTER TABLE category
    ADD COLUMN color varchar(12);
    ADD COLUMN icon varchar(12);


CREATE TABLE transaction(
  id char(16) PRIMARY KEY,
  amount decimal(10,2),
  categoryId char(36),
  type Varchar(10),
  date DATE(),
  payee varchar(),
  note TEXT,
)

select id, name FROM categories;
select * FROM categories;


INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;