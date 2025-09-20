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
create database game_activity_tracker;
--
create table users(
userID int auto_increment primary key not null,
username varchar(120),
password char(100),
creationDate datetime default current_timestamp,
updatedDate datetime on update current_timestamp,
isAdmin bool default false
);
--
create table loginHistory(
historyID int auto_increment primary key not null,
userID int not null,
date datetime default current_timestamp,
foreign key (userID) references users(userID)
on update cascade
on delete cascade
);
--
create table dashboard(--no more
dashboardID int auto_increment primary key not null,
dashboardName varchar(120),
userID int not null,
foreign key userID_dashboard (userID) references users(userID)
on update cascade
on delete cascade
); --no more
--
create table dashusers(
dashUserID int auto_increment not null primary key,
dashUsername varchar(120) not null,
userID int not null,
foreign key userID_users (userID) references users(userID)
on update cascade
on delete cascade
);
--
create table games(
gameID int primary key auto_increment not null,
gameName varchar(120) not null,
rating float default 0,
ageRating int,
price decimal,
releaseDate datetime,
details text
);
--
create table platforms(
platformID int primary key auto_increment not null,
platformName varchar(120) not null
);
--
create table accounts(
accountID int primary key not null auto_increment,
accountName varchar(120) not null,
platformID int not null,
accountAddedDate datetime default current_timestamp,
foreign key platformID_accounts (platformID) references platforms(platformID)
on update cascade
on delete no action
);
--
create table junction(
dashUserID int not null,
accountID int not null,
foreign key accountID_junction (accountID) references accounts(accountID)
on update cascade
on delete no action,
foreign key dashUserID_junction (dashUserID) references dashusers(dashUserID)
on update cascade
on delete no action
);
--
create table session(
sessionID int primary key not null auto_increment,
accountID int not null,
startTime datetime not null,
endTime datetime,
gameID int not null,
platformID int not null,

foreign key accountID_session (accountID) references accounts(accountID)
on update cascade
on delete no action,

foreign key gameID_session (gameID) references games(gameID)
on delete no action
on update cascade
);
-- adding test data