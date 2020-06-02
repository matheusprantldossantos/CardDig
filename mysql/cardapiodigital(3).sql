-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Jun-2020 às 22:04
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
-- Estrutura da tabela `conjunto`
--

CREATE TABLE `conjunto` (
  `idConjunto` int(100) NOT NULL,
  `comandaMesa` int(100) NOT NULL,
  `indexMesa` int(100) NOT NULL,
  `cpfPedido` varchar(11) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cozinheiro`
--

CREATE TABLE `cozinheiro` (
  `idcozinheiro` int(11) NOT NULL,
  `funcao` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `senha` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `ativo` tinyint(4) NOT NULL DEFAULT 0,
  `nome` varchar(50) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `cozinheiro`
--

INSERT INTO `cozinheiro` (`idcozinheiro`, `funcao`, `email`, `senha`, `ativo`, `nome`) VALUES
(1, '', 'cozinhaEmail@gmail.com', '1234', 1, 'Antônio Martins da Silva');

-- --------------------------------------------------------

--
-- Estrutura da tabela `dono`
--

CREATE TABLE `dono` (
  `iddono` int(11) NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `senha` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `ativo` tinyint(4) NOT NULL DEFAULT 0,
  `nome` varchar(50) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `dono`
--

INSERT INTO `dono` (`iddono`, `email`, `senha`, `ativo`, `nome`) VALUES
(2, 'donoEmail@gmail.com', '1234', 1, 'Juliana Pereira Paes');

-- --------------------------------------------------------

--
-- Estrutura da tabela `garcom`
--

CREATE TABLE `garcom` (
  `idgarcom` int(11) NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `senha` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `ativo` tinyint(4) NOT NULL DEFAULT 0,
  `nome` varchar(50) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `garcom`
--

INSERT INTO `garcom` (`idgarcom`, `email`, `senha`, `ativo`, `nome`) VALUES
(1, 'garcomEmail@gmail.com', '1234', 1, 'Robison Tilira Jr');

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
  `idModificado` int(100) NOT NULL,
  `dono_iddono` int(11) NOT NULL,
  `produto_idproduto` int(11) NOT NULL,
  `promocao_idpromocao` int(11) NOT NULL,
  `valorAtual` double NOT NULL,
  `nome` varchar(60) COLLATE latin1_spanish_ci NOT NULL,
  `categoria` varchar(40) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `item_modificado`
--

INSERT INTO `item_modificado` (`idModificado`, `dono_iddono`, `produto_idproduto`, `promocao_idpromocao`, `valorAtual`, `nome`, `categoria`) VALUES
(7, 2, 9, 12, 9.8, 'pudim', 'sobremesa'),
(8, 2, 12, 13, 10.29, 'coffee shot', 'bebidas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `item_pedido`
--

CREATE TABLE `item_pedido` (
  `pedido_comanda` int(11) NOT NULL,
  `cliente_cpf` varchar(12) COLLATE latin1_spanish_ci NOT NULL,
  `quantidade` varchar(45) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `item_pedido`
--

INSERT INTO `item_pedido` (`pedido_comanda`, `cliente_cpf`, `quantidade`) VALUES
(1, '', '2');

-- --------------------------------------------------------

--
-- Estrutura da tabela `item_produto`
--

CREATE TABLE `item_produto` (
  `pedido_comanda` int(200) NOT NULL,
  `produto_idproduto` int(11) NOT NULL,
  `nome_produto` varchar(80) COLLATE latin1_spanish_ci NOT NULL,
  `indexMesa` int(100) NOT NULL,
  `quantidade` int(11) NOT NULL DEFAULT 1,
  `andamento` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `item_produto`
--

INSERT INTO `item_produto` (`pedido_comanda`, `produto_idproduto`, `nome_produto`, `indexMesa`, `quantidade`, `andamento`) VALUES
(1, 10, 'sanduiche de salada', 13, 1, 0),
(1, 12, 'coffee shot', 13, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `mesa`
--

CREATE TABLE `mesa` (
  `idmesa` int(100) NOT NULL,
  `nome` varchar(120) COLLATE latin1_spanish_ci DEFAULT NULL,
  `andamento` tinyint(1) NOT NULL DEFAULT 1,
  `terminado` int(11) NOT NULL DEFAULT 1,
  `indexGarcom` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `mesa`
--

INSERT INTO `mesa` (`idmesa`, `nome`, `andamento`, `terminado`, `indexGarcom`) VALUES
(10, 'Frente janela', 0, 1, NULL),
(12, 'Meio janela', 0, 1, NULL),
(13, 'Fundo janela', 0, 1, NULL),
(14, 'Frente escada', 0, 1, NULL),
(15, 'Meio escada', 0, 1, NULL),
(16, 'Fundo escada', 0, 1, NULL),
(17, 'Fundo meio', 0, 1, NULL),
(18, 'Fora fundo', 0, 1, NULL),
(19, 'Fora meio', 0, 1, NULL),
(20, 'Fora frente', 0, 1, NULL),
(21, 'Frente direita', 0, 1, NULL),
(22, 'Frente esquerda', 0, 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

CREATE TABLE `pedido` (
  `comanda` int(200) NOT NULL,
  `valor_total` double NOT NULL,
  `indexMesa` int(100) NOT NULL,
  `indexCozinha` int(11) NOT NULL,
  `cpf` varchar(11) COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `pedido`
--

INSERT INTO `pedido` (`comanda`, `valor_total`, `indexMesa`, `indexCozinha`, `cpf`) VALUES
(1, 27.29, 13, 1, NULL);

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
(25, 'Hamburguer de alcatra', 30.75, 'hamburguer', 1, '', 'normais'),
(27, 'pizza de frango', 14.5, 'pizza', 1, '', 'salgada');

-- --------------------------------------------------------

--
-- Estrutura da tabela `promocao`
--

CREATE TABLE `promocao` (
  `idpromocao` int(11) NOT NULL,
  `porcentagem` int(100) NOT NULL,
  `idProdEsp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Extraindo dados da tabela `promocao`
--

INSERT INTO `promocao` (`idpromocao`, `porcentagem`, `idProdEsp`) VALUES
(12, 20, 9),
(13, 2, 12);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `conjunto`
--
ALTER TABLE `conjunto`
  ADD PRIMARY KEY (`idConjunto`),
  ADD KEY `conjuntoMesa` (`indexMesa`);

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
  ADD PRIMARY KEY (`idModificado`),
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
  ADD KEY `fk_pedido_has_produto_pedido_idx` (`pedido_comanda`),
  ADD KEY `mesaItemPedido` (`indexMesa`);

--
-- Índices para tabela `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`idmesa`),
  ADD KEY `garcomMesa` (`indexGarcom`);

--
-- Índices para tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`comanda`),
  ADD KEY `mesaPedido` (`indexMesa`),
  ADD KEY `cozinhaPedido` (`indexCozinha`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`);

--
-- Índices para tabela `promocao`
--
ALTER TABLE `promocao`
  ADD PRIMARY KEY (`idpromocao`),
  ADD KEY `produtoEspecifico` (`idProdEsp`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `conjunto`
--
ALTER TABLE `conjunto`
  MODIFY `idConjunto` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `cozinheiro`
--
ALTER TABLE `cozinheiro`
  MODIFY `idcozinheiro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `dono`
--
ALTER TABLE `dono`
  MODIFY `iddono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `garcom`
--
ALTER TABLE `garcom`
  MODIFY `idgarcom` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `item_modificado`
--
ALTER TABLE `item_modificado`
  MODIFY `idModificado` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `mesa`
--
ALTER TABLE `mesa`
  MODIFY `idmesa` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `promocao`
--
ALTER TABLE `promocao`
  MODIFY `idpromocao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `conjunto`
--
ALTER TABLE `conjunto`
  ADD CONSTRAINT `conjuntoMesa` FOREIGN KEY (`indexMesa`) REFERENCES `mesa` (`idmesa`);

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
  ADD CONSTRAINT `fk_pedido_has_produto_produto1` FOREIGN KEY (`produto_idproduto`) REFERENCES `produto` (`idproduto`),
  ADD CONSTRAINT `mesaItemPedido` FOREIGN KEY (`indexMesa`) REFERENCES `mesa` (`idmesa`);

--
-- Limitadores para a tabela `mesa`
--
ALTER TABLE `mesa`
  ADD CONSTRAINT `garcomMesa` FOREIGN KEY (`indexGarcom`) REFERENCES `garcom` (`idgarcom`);

--
-- Limitadores para a tabela `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `cozinhaPedido` FOREIGN KEY (`indexCozinha`) REFERENCES `cozinheiro` (`idcozinheiro`),
  ADD CONSTRAINT `mesaPedido` FOREIGN KEY (`indexMesa`) REFERENCES `mesa` (`idmesa`);

--
-- Limitadores para a tabela `promocao`
--
ALTER TABLE `promocao`
  ADD CONSTRAINT `produtoEspecifico` FOREIGN KEY (`idProdEsp`) REFERENCES `produto` (`idproduto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
