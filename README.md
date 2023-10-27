# Dairy-application
This is a dairy writing application

ER Diagram 

<img width="768" alt="Screenshot 2023-10-27 at 1 52 10 AM" src="https://github.com/Nandu064/Dairy-application/assets/49789508/e1f9fe6d-7a35-4593-83f7-2f573a506800">



Relation Diagram

<img width="901" alt="Screenshot 2023-10-27 at 12 38 20 AM" src="https://github.com/Nandu064/Dairy-application/assets/49789508/46aecf21-8491-49cd-8d53-d8c448e6ac37">




## Commands to create Databases and tables

## commands to create data base

CREATE DATABASE diary_app;

## list the databases

show databases;

## command to use the particular database

USE DATABASE diary_app;

## create schema for your database

CREATE SCHEMA webDevelopment;


## commands to create user, diary and page table

CREATE TABLE diary_app.webDevelopment.user(
userId number(25,2) NOT NULL,
userName VARCHAR(255) NOT NULL,
PRIMARY KEY(userId)
);

CREATE TABLE diary_app.webDevelopment.diary(
diaryId number(25,2) NOT NULL,
userId number(25,2) NOT NULL,
pageId number,
PRIMARY KEY(diaryId),
FOREIGN KEY(userId) REFERENCES user(userId)
);

CREATE TABLE diary_app.webDevelopment.page(
pageId number(25,2) NOT NULL,
userId number(25,2) NOT NULL,
diaryId number(25,2),
dateCreated TIMESTAMP_NTZ(9),
pageContent VARCHAR(255),
PRIMARY KEY(pageId),
FOREIGN KEY(userId) REFERENCES user(userId),
FOREIGN KEY(diaryId) REFERENCES diary(diaryId)
);


## To list the tables in the database.

show tables in DATABASE diary_app;








