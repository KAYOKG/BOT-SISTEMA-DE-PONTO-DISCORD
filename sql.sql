
CREATE DATABASE IF NOT EXISTS `crowley_mysql` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `crowley_mysql`;

CREATE TABLE IF NOT EXISTS `staff_users` (
	`staffDiscord` VARCHAR(50) NOT NULL,
  	`servico` varchar(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;