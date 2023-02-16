\c bookclubs_dev;

INSERT INTO books (title, author, page_count, image, average_rating) VALUES
('Salems Lot', 'Stephen King', 674, 'http://books.google.com/books/content?id=4ASPDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 4),
('Red Sister', 'Mark Lawrence', 498, 'http://books.google.com/books/content?id=yKZJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 4);

INSERT INTO reviews (book_id, reviewer, title, content, rating) VALUES
(1, 'Daniel', 'My Favorite', 'This book is terrifying', 5),
(1, 'Emalee', 'Too Scary', 'I could not finish the book I was too scared', 1),
(2, 'Daniel', 'Cool Book', 'This introduction to the series was really good', 4);

INSERT INTO bookclubs (name, description, goal, location, meeting_time) VALUES
('Pursuit Reads', 'A club for fellow book lovers from pursuit', 'Read the first 3 chapters of Salems Lot', 'zoom', '2:30');

INSERT INTO bookclub_books(bookclub_id, book_id) VALUES
(1, 1);

INSERT INTO users(name, favorite_book, age, favorite_genre, firebase_id) VALUES 
('Daniel', 'bob', 3, 'bob', '100'),
('Romeo', 'Bark', 7, 'Woof', '200'),
('Emalee', 'Bh', 4, 'if', '500');

INSERT INTO bookclub_users(bookclub_id, user_id) VALUES
(1, 1),
(1, 3);

