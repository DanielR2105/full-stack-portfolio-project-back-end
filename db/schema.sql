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

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    favorite_book TEXT,
    age INT,
    favorite_genre TEXT,
    firebase_id TEXT
);

CREATE TABLE bookclubs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    goal TEXT,
    location TEXT,
    meeting_time TEXT
);

CREATE TABLE bookclub_users (
  bookclub_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (bookclub_id, user_id),
  FOREIGN KEY (bookclub_id) REFERENCES bookclubs(id)
  ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE bookclub_books (
    bookclub_id INT NOT NULL,
    book_id INT NOT NULL,
    PRIMARY KEY (bookclub_id, book_id),
    FOREIGN KEY (bookclub_id) REFERENCES bookclubs(id)
    ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id)
    ON DELETE CASCADE
)