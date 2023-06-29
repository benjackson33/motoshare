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

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    title TEXT,
    image_url TEXT
    
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INTEGER
    
);


CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    likes TEXT,
    user_id INTEGER
    
);



INSERT INTO images (title, image_url)
VALUES ('background', 'https://kickstart.bikeexif.com/wp-content/uploads/2017/09/motorcycle-photographer-anthony-scott-enginethusiast.jpg');





update bikes set user_id = 1;



INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Artisan Bobber', 'BMW', 'R80/7', 'Bobber', 'https://kevilsspeedshop.com/bmw/wp-content/uploads/2014/02/F34A1153-708x472.jpg');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('OJO Cafe Racer', 'BMW', 'R100RS', 'Cafe Racer', 'https://kevilsspeedshop.com/bmw/wp-content/uploads/2018/11/UNADJUSTEDNONRAW_thumb_f6ff-708x531.jpg');





INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Street Scrambler', 'BMW', 'R100GS', 'Scrambler', 'https://kevilsspeedshop.com/bmw/wp-content/uploads/2019/10/17F8ED2C-18E0-4F9B-A92F-D153068025F1-708x531.jpeg');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Primera Tracker', 'Honda', 'NX650', 'Tracker', 'http://siderockcycles.com/bikes/primeratracker/9.jpg');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Aquila Nera ', 'Moto Guzzi', 'Le Mans 1000', 'Cafe Racer', 'http://siderockcycles.com/bikes/aquilanera/4.jpg');



