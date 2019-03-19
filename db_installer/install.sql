-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.s3platform.eu
-- Generation Time: Nov 26, 2018 at 01:50 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `s3scenarios`
--

-- --------------------------------------------------------

--
-- Table structure for table `Analyses`
--

CREATE TABLE `Analyses` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Items`
--

CREATE TABLE `Items` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `label` varchar(255) NOT NULL,
  `uncertainty` int(11) NOT NULL,
  `impact` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `AnalysisId` char(36) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20170717112557-create-item.js'),
('20170717112626-create-user.js'),
('20170717112709-create-analysis.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `authUserId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Analyses`
--
ALTER TABLE `Analyses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Items`
--
ALTER TABLE `Items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AnalysisId` (`AnalysisId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `SequelizeMeta_name_unique` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authUserId` (`authUserId`),
  ADD UNIQUE KEY `Users_authUserId_unique` (`authUserId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Analyses`
--
ALTER TABLE `Analyses`
  ADD CONSTRAINT `Analyses_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Items`
--
ALTER TABLE `Items`
  ADD CONSTRAINT `Items_ibfk_1` FOREIGN KEY (`AnalysisId`) REFERENCES `Analyses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
