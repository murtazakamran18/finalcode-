-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 02:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orders`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `s.no` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`s.no`, `name`, `email`, `message`) VALUES
(1, 'MURTAZA', 'mustafakamran@gmail.com', 'my name is murtaza kamran'),
(2, 'MURTAZA', 'mustafakamran@gmail.com', 'my name is murtaza kamran'),
(3, 'sss', 'mustafakamran@gmail.com', 'sm, skjbsk'),
(4, 'Hka', 'mustaffakamran1921@gmail.com', 'Jskw');

-- --------------------------------------------------------

--
-- Table structure for table `contact1`
--

CREATE TABLE `contact1` (
  `s.no` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact1`
--

INSERT INTO `contact1` (`s.no`, `name`, `email`, `message`) VALUES
(1, 'ssssss', 'kamranazeem18@gamil.com', 'ihiowhiowh'),
(2, 'ssssss', 'kamranazeem18@gamil.com', 'ihiowhiowh'),
(3, 'ddddhhgggggggggg', 'mariyamirfan4b@gmail.com', ';jopjpojopj'),
(4, 'Kwjw', 'mustaffakamran1921@gmail.com', 'Kakahsish');

-- --------------------------------------------------------

--
-- Table structure for table `contact2`
--

CREATE TABLE `contact2` (
  `s.no` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact2`
--

INSERT INTO `contact2` (`s.no`, `name`, `email`, `message`) VALUES
(1, 'dddd', 'mustafakamran@gmail.com', 'o;uigiupgfufyulfuylfuylful'),
(2, 'dddd', 'mustafakamran@gmail.com', 'o;uigiupgfufyulfuylfuylful'),
(3, 'dddd', 'mustafakamran@gmail.com', 'o;uigiupgfufyulfuylfuylful'),
(4, 'MURTAZA', 'ja6636108@gamil.com', 'kguigui;giu;g'),
(5, 'Murtaxa', 'mk2557615@gmail.com', 'Hsoshsksh');

-- --------------------------------------------------------

--
-- Table structure for table `contact3`
--

CREATE TABLE `contact3` (
  `s.no` int(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact3`
--

INSERT INTO `contact3` (`s.no`, `name`, `email`, `message`) VALUES
(1, 'ssssss', 'kamranazeem18@gamil.com', 'ihiowhiowh'),
(2, 'ddd', 'mariyamirfan4b@gmail.com', ';jopjpojopj'),
(3, 'ddd', 'mariyamirfan4b@gmail.com', ';jopjpojopj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`s.no`);

--
-- Indexes for table `contact1`
--
ALTER TABLE `contact1`
  ADD PRIMARY KEY (`s.no`);

--
-- Indexes for table `contact2`
--
ALTER TABLE `contact2`
  ADD PRIMARY KEY (`s.no`);

--
-- Indexes for table `contact3`
--
ALTER TABLE `contact3`
  ADD PRIMARY KEY (`s.no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `s.no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact1`
--
ALTER TABLE `contact1`
  MODIFY `s.no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact2`
--
ALTER TABLE `contact2`
  MODIFY `s.no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact3`
--
ALTER TABLE `contact3`
  MODIFY `s.no` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
