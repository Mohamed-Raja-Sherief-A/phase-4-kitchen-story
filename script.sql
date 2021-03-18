-- Db creation
Drop database if exists kitchen;
create database kitchen;
use kitchen;

-- user table creation

create table usercredentials(
username varchar(255) default 'user',
password varchar(255) ,
primary key(username)
);

-- product table creation

create table product(
pid int auto_increment,
name varchar(255),
amount double,
img longblob,
status varchar(255),
primary key(pid)
);

-- Order table Creation
create table ordertable(
oid int auto_increment,
username varchar(255),
pid int,
primary key(oid),
constraint ufk foreign key(username) references usercredentials(username),
constraint pfk foreign key(pid) references product(pid)
);

