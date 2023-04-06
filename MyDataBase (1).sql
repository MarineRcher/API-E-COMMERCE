-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : mer. 05 avr. 2023 à 17:48
-- Version du serveur : 10.6.12-MariaDB-1:10.6.12+maria~ubu2004
-- Version de PHP : 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `MyDataBase`
--

-- --------------------------------------------------------

--
-- Structure de la table `eleves`
--

CREATE TABLE `eleves` (
  `age` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `fu` varchar(255) NOT NULL,
  `hu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`id`, `price`, `name`) VALUES
(1, 0, ''),
(2, 20, 'Purina'),
(3, 20, 'Ultima chat'),
(4, 15, 'paté');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` varchar(50) NOT NULL,
  `opinion` int(50) NOT NULL,
  `categorie` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`name`, `price`, `description`, `opinion`, `categorie`, `image`, `id`) VALUES
('', 0.00, '', 0, '', '../../img/chien/croquettes chiens/croquettes.jpeg', 1),
('Purina', 20.00, 'blabla', 4, 'croquettes chats', '../img/chien/croquettes chiens/croquettes1.jpeg', 2),
('Ultima chat', 20.00, 'lala', 5, 'Chat', '../img/chat/croquettes chats/croquettes2.jpeg', 3),
('paté', 15.00, 'lala', 3, 'Chat', '../img/autres/aquarium.jpeg', 4);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `userame` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `mail`, `userame`, `password`) VALUES
(1, 'l;jlkj', 'ljlj', 'dlfgjdflgj'),
(2, 'mww', 'qws', 'wdw'),
(3, 'mww', 'qws', 'wdw'),
(4, 'hk', 'qws', 'evr'),
(5, 'wd', 'qws', 'ewfwe'),
(6, 'eew', 'qws', 'wd'),
(7, 'eew', 'qws', 'wd'),
(8, 'ewd', 'ewd', 'wed'),
(9, 'uyu', 'ewd', 'uu'),
(10, 'wd', 'ewd', 'wqd'),
(11, 'wd', 'ewd', 'wqd'),
(12, 'edf', 'fewf', 'ewf'),
(13, 'edf', 'fewf', 'ewf'),
(14, 'wef', 'fewf', 'ewf'),
(15, 'ewf', 'dafa', 'ef');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
