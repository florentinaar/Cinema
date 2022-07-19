use EmployeeDB
 
create table dbo.ContactForm(
Id int identity(1,1),
Name varchar(500),
Email varchar(500),
message varchar(500)
)  

create table Movie(
MovieID int identity(1,1),
Name varchar(500),
Categories varchar(500),
Price int
)
create table MovieCategories (
 CID int identity(1,1),
 Name  varchar(500)
)

create table Room(
RoomID int identity(1,1),
RoomName varchar(500)
)


create table Ticket(
TicketID int identity(1,1),
Seat int,
Movie varchar(500),
Price int,
)
Create table Login (
Email varchar(500),
Password varchar(500)
)

create table Events(
EventID int identity (1,1),
Title varchar(500),
Movie varchar(500),
Date date,
Image varchar(500)
)
create table Register(
id int identity (1,1),
name varchar(500),
lastname varchar(500),
birthday varchar(500),
email varchar(500),
password varchar(500),
logkey int,

)


