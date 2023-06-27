CREATE DATABASE motoshare;

CREATE TABLE bikes (
    id SERIAL PRIMARY KEY,
    title TEXT,
    brand TEXT,
    model TEXT,
    category TEXT, 
    image_url TEXT,
    user_id INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT
);

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Triumph Scrambler', 'Triumph', 'Street Twin', 'Scrambler', 'https://m.atcdn.co.uk/ect/media/w1224/28328d444508467f82c42713bca78db8.jpg');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Artisan Bobber', 'BMW', 'R80/7', 'Bobber', 'https://kevilsspeedshop.com/bmw/wp-content/uploads/2014/02/F34A1153-708x472.jpg');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('OJO Cafe Racer', 'BMW', 'R100RS', 'Cafe Racer', 'https://kevilsspeedshop.com/bmw/wp-content/uploads/2018/11/UNADJUSTEDNONRAW_thumb_f6ff-708x531.jpg');



