create database omadatabase;


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


--database creation commands
create table users(
userID int auto_increment primary key not null,
username varchar(120),
password char(100),
creationDate datetime default current_timestamp,
updatedDate datetime on update current_timestamp
);
--
create table loginHistory(
historyID int auto_increment primary key not null,
userID int not null,
date datetime,
foreign key (userID) references users(userID)
on update cascade
on delete cascade
);
--
