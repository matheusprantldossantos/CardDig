-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Maio-2020 às 00:45
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cardapiodigital`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `cpf` varchar(12) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cozinheiro`
--

CREATE TABLE `cozinheiro` (
  `idcozinheiro` int(11) NOT NULL,
  `funcao` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `senha` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `cozinheiro`
--

INSERT INTO `cozinheiro` (`idcozinheiro`, `funcao`, `email`, `senha`) VALUES
(1, '', 'cozinhaEmail@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Estrutura da tabela `dono`
--

CREATE TABLE `dono` (
  `iddono` int(11) NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `senha` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `dono`
--

INSERT INTO `dono` (`iddono`, `email`, `senha`) VALUES
(2, 'donoEmail@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Estrutura da tabela `garcom`
--

CREATE TABLE `garcom` (
  `idgarcom` int(11) NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `senha` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `garcom`
--

INSERT INTO `garcom` (`idgarcom`, `email`, `senha`) VALUES
(1, 'garcomEmail@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Estrutura da tabela `item_mesa`
--

CREATE TABLE `item_mesa` (
  `pedido_comanda` int(11) NOT NULL,
  `mesa_idmesa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `item_modificado`
--

CREATE TABLE `item_modificado` (
  `dono_iddono` int(11) NOT NULL,
  `produto_idproduto` int(11) NOT NULL,
  `promocao_idpromocao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `item_pedido`
--

CREATE TABLE `item_pedido` (
  `pedido_comanda` int(11) NOT NULL,
  `cliente_cpf` varchar(12) COLLATE latin1_spanish_ci NOT NULL,
  `quantidade` varchar(45) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `item_produto`
--

CREATE TABLE `item_produto` (
  `pedido_comanda` int(11) NOT NULL,
  `produto_idproduto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mesa`
--

CREATE TABLE `mesa` (
  `idmesa` int(11) NOT NULL,
  `nome` varchar(120) COLLATE latin1_spanish_ci DEFAULT NULL,
  `andamento` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

CREATE TABLE `pedido` (
  `comanda` int(11) NOT NULL,
  `valor_total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `nome` varchar(60) COLLATE latin1_spanish_ci DEFAULT NULL,
  `preco` double DEFAULT NULL,
  `categoria` varchar(40) COLLATE latin1_spanish_ci DEFAULT NULL,
  `disponibilidade` tinyint(1) DEFAULT NULL,
  `descricao` varchar(120) COLLATE latin1_spanish_ci NOT NULL,
  `tipo_categoria` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `nome`, `preco`, `categoria`, `disponibilidade`, `descricao`, `tipo_categoria`) VALUES
(7, 'pizza de calabreza', 35.2, 'pizzas', 1, '', 'salgadas'),
(8, 'suco de morango', 10.5, 'bebidas', 0, '', 'sucos'),
(9, 'pudim', 12.25, 'sobremesa', 1, '', 'doces'),
(10, 'sanduiche de salada', 17, 'lanches', 1, '', 'sanduiches'),
(12, 'coffee shot', 10.5, 'bebidas', 1, '', 'bebidas quentes'),
(15, 'Pizza de peperonni', 27.9, 'pizza', 1, '', 'salgadas'),
(16, 'Harburguer de costela', 34.5, 'hamburguer', 1, '', 'normais'),
(17, 'suco de hortelã', 7.5, 'bebidas', 1, '', 'sucos'),
(18, 'pizza portuguesa', 32.7, 'pizza', 1, '', 'salgadas'),
(19, 'tapioca de frango', 12.25, 'lanches', 1, '', 'tapiocas'),
(20, 'sorvete de chocolate', 5.51, 'sobremesa', 1, '', 'sorvetes'),
(21, 'pizza de milho', 32.75, 'pizza', 1, '', 'salgadas'),
(23, 'hamburguer de salda', 12, 'hamburguer', 1, '', 'vegetariano'),
(24, '\"to com fome\" - quero carne', 31, 'combinações', 1, '', 'carnívoro'),
(25, 'Hamburguer de alcatra', 30.75, 'hamburguer', 1, '', 'normais');

-- --------------------------------------------------------

--
-- Estrutura da tabela `promocao`
--

CREATE TABLE `promocao` (
  `idpromocao` int(11) NOT NULL,
  `valor` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cpf`);

--
-- Índices para tabela `cozinheiro`
--
ALTER TABLE `cozinheiro`
  ADD PRIMARY KEY (`idcozinheiro`);

--
-- Índices para tabela `dono`
--
ALTER TABLE `dono`
  ADD PRIMARY KEY (`iddono`);

--
-- Índices para tabela `garcom`
--
ALTER TABLE `garcom`
  ADD PRIMARY KEY (`idgarcom`);

--
-- Índices para tabela `item_mesa`
--
ALTER TABLE `item_mesa`
  ADD PRIMARY KEY (`pedido_comanda`,`mesa_idmesa`),
  ADD KEY `fk_pedido_has_mesa_mesa1_idx` (`mesa_idmesa`),
  ADD KEY `fk_pedido_has_mesa_pedido1_idx` (`pedido_comanda`);

--
-- Índices para tabela `item_modificado`
--
ALTER TABLE `item_modificado`
  ADD KEY `fk_item_modificado_dono1_idx` (`dono_iddono`),
  ADD KEY `fk_item_modificado_produto1_idx` (`produto_idproduto`),
  ADD KEY `fk_item_modificado_promocao1_idx` (`promocao_idpromocao`);

--
-- Índices para tabela `item_pedido`
--
ALTER TABLE `item_pedido`
  ADD PRIMARY KEY (`pedido_comanda`) USING BTREE,
  ADD KEY `fk_pedido_has_cliente_pedido1_idx` (`pedido_comanda`);

--
-- Índices para tabela `item_produto`
--
ALTER TABLE `item_produto`
  ADD PRIMARY KEY (`pedido_comanda`,`produto_idproduto`),
  ADD KEY `fk_pedido_has_produto_produto1_idx` (`produto_idproduto`),
  ADD KEY `fk_pedido_has_produto_pedido_idx` (`pedido_comanda`);

--
-- Índices para tabela `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`idmesa`);

--
-- Índices para tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`comanda`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`);

--
-- Índices para tabela `promocao`
--
ALTER TABLE `promocao`
  ADD PRIMARY KEY (`idpromocao`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cozinheiro`
--
ALTER TABLE `cozinheiro`
  MODIFY `idcozinheiro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `dono`
--
ALTER TABLE `dono`
  MODIFY `iddono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `garcom`
--
ALTER TABLE `garcom`
  MODIFY `idgarcom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `mesa`
--
ALTER TABLE `mesa`
  MODIFY `idmesa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `promocao`
--
ALTER TABLE `promocao`
  MODIFY `idpromocao` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `item_mesa`
--
ALTER TABLE `item_mesa`
  ADD CONSTRAINT `fk_pedido_has_mesa_mesa1` FOREIGN KEY (`mesa_idmesa`) REFERENCES `mesa` (`idmesa`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pedido_has_mesa_pedido1` FOREIGN KEY (`pedido_comanda`) REFERENCES `pedido` (`comanda`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `item_modificado`
--
ALTER TABLE `item_modificado`
  ADD CONSTRAINT `fk_item_modificado_dono1` FOREIGN KEY (`dono_iddono`) REFERENCES `dono` (`iddono`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_item_modificado_produto1` FOREIGN KEY (`produto_idproduto`) REFERENCES `produto` (`idproduto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_item_modificado_promocao1` FOREIGN KEY (`promocao_idpromocao`) REFERENCES `promocao` (`idpromocao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `item_pedido`
--
ALTER TABLE `item_pedido`
  ADD CONSTRAINT `fk_pedido_has_cliente_pedido1` FOREIGN KEY (`pedido_comanda`) REFERENCES `pedido` (`comanda`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `item_produto`
--
ALTER TABLE `item_produto`
  ADD CONSTRAINT `fk_pedido_has_produto_pedido` FOREIGN KEY (`pedido_comanda`) REFERENCES `pedido` (`comanda`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pedido_has_produto_produto1` FOREIGN KEY (`produto_idproduto`) REFERENCES `produto` (`idproduto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
