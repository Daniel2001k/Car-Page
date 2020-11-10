-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 08 Lis 2020, 23:49
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `importcarsdatabase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `country` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `brand` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `model` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `price` int(11) NOT NULL,
  `power` int(11) NOT NULL,
  `mileage` int(11) NOT NULL,
  `img` text COLLATE utf8_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `cars`
--

INSERT INTO `cars` (`id`, `country`, `brand`, `model`, `price`, `power`, `mileage`, `img`) VALUES
(1, 'Germany', 'Audi', 'A6', 175099, 300, 100000, '2016-audi-a6-wallpaper-hd-57790-9188719.jpg'),
(2, 'Japan', 'Toyota', 'Supra', 375099, 600, 300000, 'af09b13f4e38effd157316f054854c0f.jpg'),
(3, 'Japan', 'Toyota', 'Supra', 225099, 750, 200000, 'gorgeous-toyota-supra-1920x1080-wallpaper-14985.jpg'),
(4, 'Japan', 'Subaru', 'Impreza', 223499, 990, 200230, '244510.jpg'),
(5, 'Japan', 'Nissan', 'R34', 999999, 999, 423567, '244511.jpg'),
(6, 'Japan', 'Mazda', 'Rx-7', 332342, 759, 300567, 'maxresdefault.jpg'),
(7, 'Germany', 'BMW', 'M8', 620000, 700, 0, 'bmw-m8-gc-4-71fcbe29a87b88df7e02,0,0,0,0.jpg'),
(8, 'Germany', 'Mercedes-Benz', 'G63 AMG', 950000, 550, 0, '2019-Mercedes-AMG-G63-001-1080.jpg'),
(9, 'Germany', 'Audi', 'A3', 1235435, 321, 123123, 'carpixel.net-2012-audi-a3-sportback-s-line-85971-hd.jpg'),
(10, 'USA', 'Dodge', 'Challenger Demon', 650400, 850, 300, 'thumb-1920-845041.jpg'),
(11, 'USA', 'Ford', 'Mustang Shelby', 850000, 550, 100, '2020-Ford-Mustang-Shelby-GT500-008-1080.jpg'),
(12, 'Germany', 'Mercedes-Benz', 'E63 AMG', 150000, 550, 170000, '2013-naias-mercedes-benz-e63-amg-s-4matic-live-photos_8.jpg'),
(13, 'USA', 'Chevrolet', 'Camaro ZL1', 750000, 650, 200, 'gf-stjy-vF3s-DZNk_chevrolet-camaro-zl1-1le-1920x1080-nocrop.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `passwd` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `passwd`, `email`, `birth`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', '2020-11-10'),
(2, 'jan', 'kowalski', 'jankowalski@gmail.com', '1990-05-10'),
(3, 'test', '123', 'test@gmail.com', '2010-11-17'),
(4, 'tes123', '123', '123@gmail.com', '2020-11-17'),
(5, 'user', 'user123', 'user@gmail.com', '2020-11-18');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
