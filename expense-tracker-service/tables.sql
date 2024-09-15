
CREATE TABLE IF NOT EXISTS playing_with_neon(id SERIAL PRIMARY KEY, name TEXT NOT NULL, value REAL);

CREATE TYPE transactionType AS ENUM('INCOME', 'EXPENSE');

CREATE TABLE transaction(
  id varchar(36) PRIMARY KEY,
  amount decimal(10,2),
  categoryId varchar(36),
  type transactionType,
  date DATE,
  payee varchar(10),
  note TEXT,
  FOREIGN KEY (categoryId) REFERENCES category(id)
  

select id, name FROM categories;
select * FROM categories;


INSERT INTO playing_with_neon(name, value)
  SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM playing_with_neon;