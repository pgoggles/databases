DROP DATABASE IF EXISTS `chat`;
CREATE DATABASE chat;

USE chat;
  /* Describe your table here.*/
DROP TABLE IF EXISTS `Messages`;

CREATE TABLE messages (
`message_id` INTEGER AUTO_INCREMENT,
`content` VARCHAR(160),
`createdAt` TIMESTAMP,
`name` VARCHAR(160),
`githubHandle` VARCHAR(160),
`room` VARCHAR(160),
`campus` VARCHAR(160),
`updatedAt` TIMESTAMP,
PRIMARY KEY (`message_id`)
);

/* CREATE other tables and define schemas for them here! */
/* Rooms */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to CREATE the database and the tables.*/

