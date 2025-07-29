-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2025 at 10:37 PM
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
-- Database: `codetentacles_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT 'admin',
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@example.com', '$2y$05$SBw.SnZkXteGmWPZ8oTlZO.b0xU3FD3FEKs1HT40D7t.QH.2UdYk6', 'admin', '0000-00-00 00:00:00', '2025-07-29 01:42:12');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `detail` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `detail`, `image`, `price`, `productId`, `createdAt`, `updatedAt`) VALUES
(3, 'Dell', 'Gaming', 'uploads\\brand_images\\1753730942145-918258466.jpg', 1200, 2, '2025-07-28 19:29:02', '2025-07-28 19:29:02'),
(4, 'HP', 'Office', 'uploads\\brand_images\\1753730942146-823815002.jpg', 1500, 2, '2025-07-28 19:29:02', '2025-07-28 19:29:02'),
(5, 'Dell', 'Gaming', 'uploads\\brand_images\\1753733802306-859325624.jpg', 1200, 3, '2025-07-28 20:16:42', '2025-07-28 20:16:42'),
(6, 'HP', 'Office', 'uploads\\brand_images\\1753733802310-511497885.jpg', 1500, 3, '2025-07-28 20:16:42', '2025-07-28 20:16:42'),
(7, 'Dell', 'Gaming', 'uploads\\brand_images\\1753733813108-995694239.jpg', 1200, 4, '2025-07-28 20:16:53', '2025-07-28 20:16:53'),
(8, 'HP', 'Office', 'uploads\\brand_images\\1753733813109-155938072.jpg', 1500, 4, '2025-07-28 20:16:53', '2025-07-28 20:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `sellerId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `sellerId`, `createdAt`, `updatedAt`) VALUES
(2, 'Mouse', 'Gaming Mouse', 1, '2025-07-28 19:29:02', '2025-07-28 19:29:02'),
(3, 'Mouse', 'Gaming Mouse', 1, '2025-07-28 20:16:42', '2025-07-28 20:16:42'),
(4, 'Mouse', 'Gaming Mouse', 2, '2025-07-28 20:16:53', '2025-07-28 20:16:53');

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `skills` text DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) DEFAULT 'seller',
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sellers`
--

INSERT INTO `sellers` (`id`, `name`, `email`, `mobile`, `country`, `state`, `skills`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'John', 'john@example.com', '9999999999', 'India', 'Maharashtra', 'Node,React', '$2b$10$G/62QDbC18UPe2LjWQh6SussXlMsusEuBDFb4GdQoNvCMHP90/cea', 'seller', '2025-07-28 19:14:11', '2025-07-28 19:14:11'),
(2, 'test', 'test@example.com', '8888888888', 'India', 'Maharashtra', 'chemist,shop', '$2b$10$HbQddO4SiLn5xe4ndDEckeBgDihOY7oeXIjmMbGUlcHV5CqNTqHju', 'seller', '2025-07-28 20:14:07', '2025-07-28 20:14:07'),
(8, 'test', 'test1@example.com', '8888888888', 'India', 'Maharashtra', 'chemist,shop', '$2b$10$p3mcVK9/VVZMS8Vbmn39uOrL65oELNPtApYGdHRHaXu7RguRuXb7W', 'seller', '2025-07-28 20:25:24', '2025-07-28 20:25:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sellerId` (`sellerId`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `brands_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`sellerId`) REFERENCES `sellers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
