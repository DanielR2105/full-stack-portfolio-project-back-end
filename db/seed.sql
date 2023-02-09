\c bookclubs_dev;

INSERT INTO books (title, author, page_count, image, average_rating) VALUES
("Salem's Lot", 'Stephen King', 674, 'http://books.google.com/books/content?id=4ASPDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 4),
('Red Sister', 'Mark Lawrence', 498, 'http://books.google.com/books/content?id=yKZJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 4);

INSERT INTO reviews (book_id, reviewer, title, content, rating) VALUES
(1, 'Daniel', 'My Favorite', 'This book is terrifying', 5),
(1, 'Emalee', 'Too Scary', 'I could not finish the book I was too scared', 1),
(2, 'Daniel', 'Cool Book', 'This introduction to the series was really good', 4);
