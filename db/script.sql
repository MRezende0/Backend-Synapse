use lojavirtual; 

CREATE TABLE IF NOT EXISTS products(
	id BIGINT(11) AUTO_INCREMENT,
    nome VARCHAR(200),
    price DECIMAL(10,2),
    PRIMARY KEY (id)
); 

SELECT * FROM products;

INSERT INTO products VALUE(1,'Batata',1.00);
INSERT INTO products(nome, price) VALUE('Cartela de Ovo',10.00);
INSERT INTO products(nome, price) VALUE('Cacetinho',3.50);

ALTER TABLE 'products' ADD COLUMN 'category' VARCHAR(45) NULL AFTER 'price';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

FLUSH PRIVILEGES;