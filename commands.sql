-- creating table 
CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text NOT NULL,
    urls text NOT NULL,
    title text NOT NULL,
    likes integer DEFAULT 0, 
    date time
);

-- input data to table blogs
INSERT into blogs (author, urls, title, likes) values ('Tushar', 'tushar.com', 'somewhere-title', 100)

-- insert another data to table blogs
INSERT into blogs (author, urls, title, likes) values ('King', 'king.com', 'king-title', 1000)
