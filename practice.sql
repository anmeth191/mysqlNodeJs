CREATE DATABASE test;
use test;

CREATE TABLE users(
id INT auto_increment not null,
name varchar(255),
lastname varchar(255),
primary key(id)
);


create table bands(
id int not null auto_increment,
band_name varchar(255) not null,
country varchar(255),
id_user int not null,
primary key(id),
foreign key(id_user) references users(id)
);


insert into users (name, lastname) values ('Bacon' , 'Rivera') , ('Loki' , 'Sadowski');
insert into bands (band_name, country , id_user) values ('metallica' , 'usa', 1 ) , ('slipknot' , 'usa', 1 ) , ('Pearl Jam' , 'usa', 2) , ('Nirvana' , 'usa', 2 ),
('Gojira' , 'France', 1 );

select * from bands inner join users on bands.id_user = users.id && users.name ='Bacon';


update users set lastname = 'Sadowski' where id = 1;

select * from bands where country = 'france';


select name , COUNT(name) from users inner join bands on users.id = bands.id_user group by name; 

select * from users;