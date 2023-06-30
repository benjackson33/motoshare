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
    bikeid INTEGER,
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

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Type 7A ', 'Yamaha', 'SR500', 'Scrambler', 'https://images.squarespace-cdn.com/content/v1/5a01cbe59f8dce508025d53d/1512496853709-GB5K0Z14GEQJLPUR5S7Q/Auto+Fabrica+Type+7A+%2811%29+%28Large%29.JPG?format=1500w');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Type 8', 'Honda', 'CX500', 'Cafe Racer', 'https://images.squarespace-cdn.com/content/v1/5a01cbe59f8dce508025d53d/1512583150570-DFMZ5QZGH51EIZP88YN4/Auto+Fabrica+Type+8+16+%28Large%29.jpg?format=1500w');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('Type 6', 'Yamaha', 'XS650', 'Cafe Racer', 'https://images.squarespace-cdn.com/content/v1/5a01cbe59f8dce508025d53d/1512493050813-KDAORWVM0BTB97LV95JI/Auto+Fabrica+Type+6+%282%29.jpg?format=1500w');

INSERT INTO bikes (title, brand, model, category, image_url)
VALUES ('SkyFin', 'Moto Guzzi', 'SP1000 3', 'Cafe Racer', 'http://siderockcycles.com/bikes/skyfin/7.jpg');





