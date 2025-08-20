
create table users(id int auto_increment primary key, userName varchar(50));

CREATE TABLE passwords (
    user_id INT PRIMARY KEY,
    userPassword VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE accountinfo (
    user_id INT PRIMARY KEY,
    lastlogin DATETIME,
    account_creation_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
