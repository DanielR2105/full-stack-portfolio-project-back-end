DROP DATABASE IF EXISTS bookclubs_dev;
CREATE DATABASE bookclubs_dev;

\c bookclubs_dev;

CREATE TABLE books (
 id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 author TEXT NOT NULL,
 page_count INTEGER,
 image TEXT,
 average_rating NUMERIC
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 book_id INTEGER REFERENCES books (id)
 ON DELETE CASCADE
);